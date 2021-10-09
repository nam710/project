const express = require('express');
const app = express();
const userRouter=require('./routers/userRouter')
const cors = require('cors');

const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);

const io = new Server(httpServer, { cors: { origin: ['http://localhost:3000'] } });

io.on("connection", (socket) => {
    console.log('client connected');

    socket.on('sendmsg', (data) => {
        console.log(data);
        data.sent = false;
        socket.broadcast.emit('recmsg', data);
    })

});

const port = process.env.PORT || 5000;
const corsOptions = {origin:['http://localhost:3000']}
app.use(cors(corsOptions))
app.use(express.json());


app.use('/user',userRouter)

app.get('/home',(req,res) =>{
    res.send('request at home')
})
httpServer.listen(port,()=>{
    console.log('server started successfully on port '+ port)
})