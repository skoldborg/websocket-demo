const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
const PORT = 3000;
server.listen(PORT, console.log(`Socket server listening on ${PORT}`));

app.use(cors());

app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'index'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Views
app.get('/', (req, res) => {
    res.render('home');
});

const socketEvents = require('./socket');
socketEvents(io);