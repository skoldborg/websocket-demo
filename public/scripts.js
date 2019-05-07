const socket = io('http://localhost:3000');

const chatMsgs = document.querySelector('.chat__messages');
const chatInput = document.querySelector('.chat__input');
const chatSubmit = document.querySelector('.chat__submit');

const appendMsg = (msgTxt) => {
    const msg = document.createElement('li');
    msg.innerText = msgTxt;

    chatMsgs.append(msg);
}

chatSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    socket.emit('new message', chatInput.value);
    chatInput.value = '';
})

socket.on('user connected', data => {
    appendMsg('User has joined the chat...');
});

socket.on('user disconnected', data => {
    appendMsg('User has left the chat...');
});

socket.on('new message', msg => {
    appendMsg(msg);
});