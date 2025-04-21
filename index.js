const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Node.js!');
});

app.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
});
