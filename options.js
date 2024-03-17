module.exports = {
	gameOptions: {
	reply_markup: JSON.stringify ({
		inline_keyboard: [
			[{text: 'Текст кнопки1', callback_data: '1'}, {text: 'Текст кнопки2', callback_data: '2'}, {text: 'Текст кнопки3', callback_data: '3'}],
			[{text: 'Текст кнопки4', callback_data: '4'}, {text: 'Текст кнопки5', callback_data: '5'}, {text: 'Текст кнопки6', callback_data: '6'}],
			[{text: 'Текст кнопки7', callback_data: '7'}, {text: 'Текст кнопки8', callback_data: '8'}, {text: 'Текст кнопки9', callback_data: '9'}],
			[{text: 'Текст кнопки0', callback_data: '0'}],
		]
	})
	},

	againOptions: {
		reply_markup: JSON.stringify ({
			inline_keyboard: [
				[{text: 'Играть еще раз', callback_data: '/again'}],
			]
		})
	}
}