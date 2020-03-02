const express = require('express');
const path = require('path');
const server = express();

const PORT = 3000;

server.use(express.static(path.join(__dirname, '../client', 'public')));

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});