const app = require('./app');

const PORT = 3000;

// sunucuyu baslatma isini app.js den ayirdim
app.listen(PORT, () => {
  console.log(`sunucu http://localhost:${PORT} adresinde calisiyor`);
});