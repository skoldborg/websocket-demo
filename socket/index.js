module.exports = (io) => {
    io.on('connection', socket => {
        io.sockets.emit('user connected');

        socket.on('new message', msg => {
            io.emit('new message', msg);
        });

        socket.on('disconnect', () => {
            io.sockets.emit('user disconnected');
        });
    }); 
}