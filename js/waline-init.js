import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

init({
  el: '#waline',
  serverURL: 'comment.myelliot.net',
  lang: "en-US",
  emoji: ['https://unpkg.com/@waline/emojis@1.1.0/qq',
    'https://unpkg.com/@waline/emojis@1.1.0/tieba',
    'https://unpkg.com/@waline/emojis@1.1.0/tw-emoji',],

});