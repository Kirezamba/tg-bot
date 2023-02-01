const express = require("express");
const { config } = require("dotenv");
const TelegramApi = require("node-telegram-bot-api");
const { accessButton, continuousButtons, payDoneButton } = require("./options");

const app = express();
const port = process.env.PORT || 3001;
app.get("/", (req, res) => res.type("html").send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

config();
const TELEGRAM_API_TOKEN = process.env.TELEGRAM_API_TOKEN;
const RARRIKATE_CHAT_ID = process.env.RARRIKATE_CHAT_ID;
const token = TELEGRAM_API_TOKEN;

const rarrikateChatId = RARRIKATE_CHAT_ID;

const bot = new TelegramApi(token, { polling: true });

const start = () => {
  const RARRIKATE_CHAT_ID = process.env.RARRIKATE_CHAT_ID;
  const token = TELEGRAM_API_TOKEN;
  const initMsg = "/start";

  bot.setMyCommands([
    {
      command: initMsg,
      description: "Начальное приветствие",
    },
  ]);

  bot.on("message", async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === initMsg) {
      await bot.sendMessage(
        chatId,
        ` Привет! Я бот-помощник Кати
  Здесь ты можешь оформить подписку на "пространство эстетичных материалов немецкого языка"`,
        accessButton
      );
    }
  });

  bot.on("callback_query", async cbMsg => {
    const answer = cbMsg.data;
    const cbChatId = cbMsg.from.id;
    if (answer === "access") {
      await bot.sendMessage(
        cbChatId,
        `"Пространство эстетичных материалов" - это база авторских материалов, ворбуков, аутентичных статей, а также адаптированных уроков из различных источников, подготовленных Катей.
      Канал будет пополняться на постоянной основе 🖤  
      
      Стоимость подписки на 30 дней - 990₽(напоминание о продлении подписки ты получишь за пару дней до ее окончания).  
      
      Также ты можешь оформить подписку на 3 и 6 месяцев. При этом, за тобой сохранится первоначальная стоимость подписки на месяц 🖤
      Стоимость подписки на 3 месяца - 2970₽
      Стоимость подписки на 3 месяца - 5940₽
      
      Через несколько минут после оплаты ты попадешь в канал "Креативное пространство 🥨" и уже сможешь начать использовать материалы и получать от них удовольствие ✨`,
        continuousButtons
      );
    }

    if (answer === "writeKate") {
      console.log(answer);
    }

    if (answer === "pay") {
      await bot.sendMessage(
        cbChatId,
        `Чтобы оплатить подписку, переведи нужную сумму:
990₽ / 2970₽ / 5940₽
⁃ по номеру карты:
5536 9140 1779 5208
     
⁃ или по ссылке:
https://www.tinkoff.ru/rm/elaeva.ekaterina5/mGeOh69614
     
После этого нажми кнопку «Я оплатил(-а)`,
        payDoneButton
      );
    }

    if (answer === "payDone") {
      await bot.sendMessage(
        cbChatId,
        `Секунду, проверяем вашу оплату. 
      Это может занять некоторое время...`
      );
      // await bot.sendMessage(
      //   rarrikateChatId,
      //   `${cbMsg.from.username} ${cbMsg.from.last_name} ${cbMsg.from.first_name}`
      // );
    }
  });
};
start();

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`;
