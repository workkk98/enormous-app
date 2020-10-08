const Express = require('express');
const app = Express();
const cors = require('cors');

var multer  = require('multer');
var upload = multer({
  dest: './uploads/'
});

app.use(cors());
app.options('*', cors());

app.post('/api/upload' , upload.single('file'), function (req, res) {
  console.log(req.file);
  res.send('success');
});


app.listen(3000, function () {
  console.log('app is running on 3000');
});