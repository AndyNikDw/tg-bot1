const TelegramApi = require('node-telegram-bot-api')

const token = '6622767638:AAEWnGQ-V6YPZDK0fiN3dPDPryivyIFbizs'

const bot = new TelegramApi(token, {polling:true})

const chats ={}

const {gameOptions, againOptions} = require('./options.js')

const startGame = async (chatId) => {
		await bot.sendMessage(chatId, 'угадай цифру')
		const randomNumber = Math.floor(Math.random()*10)
		chats[chatId] = randomNumber;
		await bot.sendMessage(chatId, 'угадывай', gameOptions);
}

const start = () => {
bot.setMyCommands ([
	{command: '/start', description: 'Начальное приветствие'},
	{command: '/info', description: 'Узнать имя'},
	{command: '/game', description: 'игра'}
])

bot.on('message', async msg=>{
	const text = msg.text;
	const chatId = msg.chat.id;
	
	if (text === '/start') {
		 await bot.sendPhoto(msg.chat.id, 'bg.jpeg');
		return bot.sendMessage(chatId, 'Привет, это мой бот1');
	}
	if (text === '/info') {
		return bot.sendMessage(chatId, `твое имя ${msg.from.first_name}`);
	}
	if (text === '/game') {
		return startGame(chatId);
	}
	return bot.sendMessage(chatId, 'Нет такой команды');
})

bot.on('callback_query', async msg=>{
	const data = msg.data;
	const chatId = msg.message.chat.id;
	if (data === '/again') {
		return startGame(chatId)
	}
	if (data === chats[chatId]) {
		return bot.sendMessage(chatId, `Поздравляю, ты угадал ${chats[chatId]}`, againOptions)
	} else {
		return bot.sendMessage(chatId, `ты не угадал ${chats[chatId]}`, againOptions)
	}
	bot.sendMessage(chatId, `ты выбрал ${data}`);
	console.log(msg)
})

}

start()