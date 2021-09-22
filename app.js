
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 80;

const app = express();

app.use(express.urlencoded())


// sendFile will go here

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post('/', function(req, res) {
    Name = req.body.Name
    number = req.body.number
    email = req.body.email
    message = req.body.message
    
    let outputdetailformet = `
                                 
 Name      : ${Name}
 Phone no. : ${number} 
 Email id  : ${email} 
                            
 Message   : ${message}


`

  fs.writeFileSync( Name +'_details.txt' , outputdetailformet );


  res.sendFile(path.join(__dirname, '/views/submit.html'));
   
  });


app.listen(port, ()=>{
    console.log(`your app is now on --------- http://localhost
  `)
})




