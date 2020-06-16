const express = require('express');
app = express();

app.get('/', (req, res)=> {
  res.send('<h1>Hello World!</h1>\n');
});

app.get('/mars',(req,res)=>{
  res.send('<h1>Hello Mars</h1>');
});

app.listen(8080, ()=> {
  console.log('Example app listening on port 8080!');
});

