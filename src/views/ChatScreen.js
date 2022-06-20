import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View,Text,Button, ImageBackground } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

export default function ChatScreen(){
    const [messages,setMessages] = useState([])

    useEffect(() => {
        setMessages([
          {  _id:1,
            text: "testing messages",
            createdAt: new Date(),
            user:{
                _id:2,
                name:"React native",
                avatar: "https://placeimg.com/140/140/any"
            }
        },
        {  _id:2,
            text: "testing messages",
            createdAt: new Date(),
            user:{
                _id:1,
                name:"React native",
                avatar: "https://placeimg.com/140/140/any"
            }
        }])
    },[])

    const onSend = useCallback((messages = []) =>{
        setMessages(prevMessages => GiftedChat.append(prevMessages,messages))
    },[])

    const renderBubble = (props) => {
        return (
            <ImageBackground 
            source={require("../../assets/chatBackgrund.jpg")}
            >
        <Bubble 
        {...props}
        wrapperStyle={{
            left:{
                backgroundColor:"#fff",
                
            },
            right:{
                backgroundColor:"#000",
               
                
            }
        }}
        textStyle={{
            right:{
                color:"#fff",
                textAlign:"center"
            }
        }}
        />
        </ImageBackground>
        )
    }

    return (

      <GiftedChat 
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id:1,
      }}
      renderBubble={renderBubble}
      />

    )
}
const styles = StyleSheet.create({
    chatScreen:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    }
})