const express = require('express');
const logger = require('./middleware/logger');
const taskRouter = require('./routes/task');

const app = express();

// post ve putta bodyden json okuyabilmek icin ilk sirada olmali
app.use(express.json());

// her istek route'a gitmeden once loglansin
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({ mesaj: 'TaskFlow API calisiyor' });
});

// /tasks ile baslayan tum istekleri task.js'e yonlendiriyorum
app.use('/tasks', taskRouter);

// yukardaki hicbir yola uymazsa 404 donsun diye en sonda yaziyorum
app.use((req, res) => {
  res.status(404).json({
    basarili: false,
    mesaj: 'endpoint bulunamadi'
  });
});

module.exports = app;