const express = require('express');
app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

//import message_controller
const messages_controller = require('./controllers/messages_controller');

//endpoints
app.post('/api/messages', messages_controller.create);
app.get('/api/messages', messages_controller.read);
app.put('/api/messages/:id', messages_controller.update);
app.delete('/api/messages/:id', messages_controller.delete);

const port = 3001;
app.listen(port, () => console.log(`Connected to server at port ${port}`));