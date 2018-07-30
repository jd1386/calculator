const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Set Static Folders
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('./layouts/main');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
})