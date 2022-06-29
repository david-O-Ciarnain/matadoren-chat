import { useCallback, useEffect, useState } from "react";

import {

  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";

import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import Unorderedlist from 'react-native-unordered-list';


var stompClient =null;
const ChatRoom = () => {
    const [privateChats, setPrivateChats] = useState(new Map());     
    const [publicChats, setPublicChats] = useState([]); 
    const [tab,setTab] =useState("CHATROOM");
    const [userData, setUserData] = useState({
        username: '',
        receivername: '',
        connected: false,
        message: ''
      });
    useEffect(() => {
      console.log(userData);
    }, [userData]);

    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }

    const onConnected = () => {
        setUserData({...userData,"connected": true});
        stompClient.subscribe('/chatroom/public', onMessageReceived);
        stompClient.subscribe('/user/'+userData.username+'/private', onPrivateMessage);
        userJoin();
    }

    const userJoin=()=>{
          var chatMessage = {
            senderName: userData.username,
            status:"JOIN"
          };
          stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    }

    const onMessageReceived = (payload)=>{
        var payloadData = JSON.parse(payload.body);
        switch(payloadData.status){
            case "JOIN":
                if(!privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName,[]);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;

            default:
        }
    }
    
    const onPrivateMessage = (payload)=>{
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list =[];
            list.push(payloadData);
            privateChats.set(payloadData.senderName,list);
            setPrivateChats(new Map(privateChats));
        }
    }

    const onError = (err) => {
        console.log(err);
        
    }

    const handleMessage =(event)=>{
        const {value}=event.target;
        setUserData({...userData,"message": value});
    }
    const sendValue=()=>{
            if (stompClient) {
              var chatMessage = {
                senderName: userData.username,
                message: userData.message,
                status:"MESSAGE"
              };
              console.log(chatMessage);
              stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
              setUserData({...userData,"message": ""});
            }
    }

    const sendPrivateValue=()=>{
        if (stompClient) {
          var chatMessage = {
            senderName: userData.username,
            receiverName:tab,
            message: userData.message,
            status:"MESSAGE"
          };
          
          if(userData.username !== tab){
            privateChats.get(tab).push(chatMessage);
            setPrivateChats(new Map(privateChats));
          }
          stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
          setUserData({...userData,"message": ""});
        }
    }

    const handleUsername=(event)=>{
        const {value}=event.target;
        setUserData({...userData,"username": value});
    }

    const registerUser=()=>{
        connect();
    }

return(
  <View style={styles.container}>
    {userData.connected ?
    <View style={styles.chatBox}>

      <View style={styles.merberList}>
      <Unorderedlist color="#fff">

       <TouchableHighlight activeOpacity={0.6} underlayColor="blueviolet"  onPress={() => alert('Pressed!')}> 
        <Unorderedlist color="#fff" onPress={() =>{ setTab("CHATROOM")}} style={`${styles.member}`}>
          <Text>CHATROOM</Text>
        </Unorderedlist>
        </TouchableHighlight>

        {[...privateChats.keys()].map((name,index) => (
          <TouchableHighlight activeOpacity={0.6} underlayColor=""  onPress={() => alert('Pressed!')}>
          <Unorderedlist color="#fff" onPress={() =>{setTab(name)}} style={`${styles.member}`} key={index}>
            <Text>{name}</Text>
          </Unorderedlist>
          </TouchableHighlight>

        ))}
        </Unorderedlist>  
      </View>

      {tab==="CHATROOM" && <View style={styles.chatContent}>
        <Unorderedlist color="#fff" style={styles.chatMessage}>
          {publicChats.map((chat,index) => (
            <Unorderedlist color="#fff" style={`${styles.message}`} key={index}>
              {chat.senderName !== userData.username && <View style={styles.avatar}><Text>{chat.senderName}</Text></View>}
              <View style={styles.messageData}><Text>{chat.message}</Text></View>
              {chat.senderName === userData.username && <View style={styles.avatar}></View>}
            </Unorderedlist>
          ))}
        </Unorderedlist>
        
        <View style={styles.sendMessage}>
          <TextInput
          style={styles.inputMessages}
          onChangeText={(text) => handleChange(handleMessage, text)}
          value={userData.message}
          placeholder="...message"
          textContentType="message">
          </TextInput> 
          <Button 
          style={styles.sendButton}
          onPress={sendValue}
          ><Text>Send</Text>
          </Button>

        </View>
        </View>}

        {tab !== "CHATROOM" && <View style={styles.chatContent}>
          <Unorderedlist style={styles.chatMessages}>
            {[...privateChats.get(tab)].map((chat,index) =>(
              <Unorderedlist>
                {chat.senderName !== userData.username && <View style={styles.avatar}>{chat.senderName}</View>}
                <View style={styles.messageData}>{chat.message}</View>
                {chat.senderName === userData.username && <View style={styles.avatar}>{chat.senderName}</View>}
              </Unorderedlist>
            ))}
          </Unorderedlist>

          <View style={styles.sendMessage}>
           <TextInput
            style={styles.inputMessages}
            onChangeText={(text) => handleChange(handleMessage, text)}
            value={userData.message}
            placeholder="...message"
            textContentType="message">
           </TextInput> 
             <Button 
              style={styles.sendButton}
              onPress={sendPrivateValue}
             ><Text>Send</Text>
            </Button>
           </View>
          </View>}

    </View>
      :
      <View style={styles.register}>
        <TextInput
        id="user-name"
        placeholder="enter your name"
        textContentType="username"
        value={userData.username}
        onChange={handleUsername}
        >
      </TextInput>
        <Button onPress={registerUser}><Text>do something</Text></Button>
        
        
      </View>
  }
  </View>
)
}

const styles = StyleSheet.create({
  container:{
    position:"fixed",
   
  },

  chatBox:{
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin:40,
    height:600,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },

  merberList:{
    width:20
  },

  member:{
    padding:10,
    backgroundColor:"#eee",
    borderColor:"#000",
    marginHorizontal:2,
    marginVertical:5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },


  chatContent:{
    width:"80%",
    marginLeft:10
  },

  chatMessage:{
    height:"80%",
    borderColor:"#000",
    borderWidth:"1px"
  },
  message:{
    padding:"5px",
    width:"auto",
    flex:1,
    flexDirection: 'row',
    justifyContent:"flex-end",
    shadowColor: '#121212',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  avatar:{
    backgroundColor:"cornflowerblue",
    padding:"3px 5px",
    borderRadius:"5px",
    color:"#fff"
  },

  messageData:{
    padding:"5px"
  },

  sendMessage:{
    width:"100%",
    flex:1,
    flexDirection: 'row',
  },
  inputMessages:{
    width:"90%",
    borderRadius:"50px"
  },

  sendButton:{
    with:"10%",
    borderRadius:"50px",
    marginLeft:"5px",
  },

  chatContent:{
    width:"80%",
    marginLeft:"10px"
  },
  
  chatMessage:{
    height:"80%",
    borderColor:"#000"
  },
  register:{
    position:"fixed",
    padding:"30px",
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    screenTop:"35%",
    screenLeft:"32%",
    flex:1,
    flexDirection: 'row',
  }
})
export default ChatRoom
