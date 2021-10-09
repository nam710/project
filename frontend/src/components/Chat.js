import { useEffect, useState } from "react";
import './Chat.css';
import app_config from "../config";
import {Button,Card,Typography,TextField} from '@mui/material';
import {io} from 'socket.io-client';
import clsx from 'clsx';


const Chat = () => {
    const url=app_config.api_url;
    

const [socket,setSocket]= useState(io("http://localhost:5000",{autoConnect:false}));


    const [messageList, setMessageList] = useState([
        {text:'Hi',sent:true},
        {text:'Hello',sent:false},
        {text:'Send notes',sent:true}
    ]);


const [message, setMessage] = useState("");

const sendMessage = () => {
    socket.emit('sendmsg',{text:message,sent:true})
    const newList = [...messageList,{text:message,sent:true}];
    console.log(newList);
    setMessageList(newList);
}

useEffect(() => {
   socket.connect();
   
}, [])
socket.on('recmsg',(data => {
    console.log(data);
    const newList = [...messageList,data];
    console.log(newList);
    setMessageList(newList);
}))

return(
    <div className='container mt-5'>
        <div className="chat-card" style={{backgroundImage:'url(https://crew.bet/wp-content/uploads/2017/02/bet-blocks-bg-purple.png?id=2014)'}}>
            
        <Typography gutterBottom variant="h5" className='text-center py-3' component="div">
          Chatting App
        </Typography>
           
          <div className='card-body'>
          <div className='message-area'>
              {
                  messageList.map((msg) => {
                      return <p className={clsx('message',msg.sent?'sent':'rec')}>{msg.text}</p>
                  })
              }
          </div>
         <div className='input-group'>
         <input type='text' placeholder='Message...'  onChange={(e) => {setMessage(e.target.value)}} className='form-control outline me-1 mb-1'/>
         <div className="input-group-append">
           <Button sx={{"&.MuiButton-root": {"borderRadius": "100%","height":"38px"} }} variant="contained" onClick={sendMessage} color="primary"><i class="fas fa-paper-plane fa-lg"></i></Button>
         </div>
         </div>
          </div>

        </div>
        
    </div>
)


}
export default Chat;