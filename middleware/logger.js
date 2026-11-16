function logger(req, res, next) {
  const zaman = new Date().toLocaleString('tr-TR');
  console.log(`[${zaman}] ${req.method} ${req.originalUrl}`);
  // next demezsek istek burda takilir route'a gecemez
  next();
}

module.exports = logger;