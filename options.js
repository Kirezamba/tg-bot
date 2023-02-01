module.exports = {
  accessButton: {
    parse_mode: "markdown",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: `Получить доступ к каналу`, callback_data: "access" }]],
    }),
  },
  payDoneButton: {
    parse_mode: "markdown",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: `Я оплатил(-а)`, callback_data: "payDone" }]],
    }),
  },
  continuousButtons: {
    parse_mode: "markdown",
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          { text: `Оплатить подписку`, callback_data: "pay" },
          { text: `Написать Кате`, callback_data: "writeKate", url: "t.me/rarrikate" },
        ],
      ],
    }),
  },
};
