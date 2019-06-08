const { createServer } = require('http')
const parsec = require('../lib/body-parsec')

createServer(async (req, res) => {
  const data = await parsec.custom(req, data => data.toUpperCase())
  res.end(req.body)
  console.log(data)
}).listen(80)
