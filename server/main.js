const express = require('express')
const app = express()

const http = require('http');

const port = 3000;

app.get('/', function (req, res) {
  res.send('Get request to the homepage')
})

//clientside application sends post request
app.post('/transaction', function (req, res) {
  res.send('POST request to the homepage');
  //load the fabric config
  var client = Client.loadFromConfig('test/fixtures/network.yaml');
  //set up the stores
  client.initCredentialStores()
    .then((nothing) => {});
  //new transaction id is created
  let tx_id = client.newTransactionID(true);

  let request = {
    config: config,
    data: req.body
  };
  //create channel and instantiate the chaincode
  var channel = client.createChannel(request);
  channel.instantiateChaincode();
  //send a transaction proposal, receive endorsement and return the successful transaction
  try {
    res.send(channel.sendTransaction(channel.sendTransactionProposal(request)));

  } catch (ex) {
    throw ex;
  }

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});