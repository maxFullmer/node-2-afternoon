let messages = [];
id = 0;

//potential middleware functions

module.exports = {
    create: (req, res, next) => {
        console.log('hit inside messages controller');
        const {text,time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages)
        },

    read: (req, res, next) => {
        console.log('hit inside messages controller');
        res.status(200).send(messages)
    },

    update: (req, res, next) => {
        console.log('hit inside messages controller');
        //destructure if its in body of a hypertext request 
        const {text} = req.body;
        // normal assign if its a parameter in URL 
        const targetID = req.params.id;
        //get the message index by finding the id of the message
        const messageIndex = messages.findIndex(message => message.id == targetID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages)
    },

    delete: (req, res, next) => {
        const targetID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == targetID);
        messages.splice(messageIndex,1);
        res.status(200).send(messages);
    }
}