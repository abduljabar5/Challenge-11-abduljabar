const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('assets'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);







app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);