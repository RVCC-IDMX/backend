// IMPORT EXPRESS
const express = require('express');

let app = express();

// ROUTE = HTTP METHOD + URL PATH
// GET METHOD
app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello from your RVCC-IDMX Express Server</h1>');
});

//CREATE A SERVER

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
