const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// DB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork-api', {
    //seFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

// Starting the server
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));