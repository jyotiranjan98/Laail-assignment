const express = require('express');
const connect = require('./src/db')

const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

const patient = require('./controllers/patientRegister')
app.use('/users', users)

app.get('/users', (req, res) => {
  const user = req.query.type; 
  const collection = user === 'lender' ? 'Users' : 'Contracts';
  collection.find({}).toArray((err, users) => {
    if (err) {
      res.status(500).send({ error: 'Error' });
    } else {
      res.send(users);
    }
  });
});

app.post('/lenders', (req, res) => {
  const lender = req.body;
  users.insertOne(lender, (err, result) => {
    if (err) {
      res.status(500).send({ error: 'Error creating' });
    } else {
      res.send(result.ops[0]);
    }
  });
});

app.listen(4200, async function(){
    try{
        await connect();
        console.log("listen on port 4200")
    }
    catch(error){
        console.log(error)
    }
})