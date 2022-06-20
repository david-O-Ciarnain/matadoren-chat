import { useCallback, useEffect, useState } from "react";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { View} from "react-native";



export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "testing messages",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "testing messages",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);


    const onSend = useCallback((messages = []) =>{
        setMessages(prevMessages => GiftedChat.append(prevMessages,messages))
    },[])

    const renderBubble = (props) => {
        return (
           
        <Bubble
        {...props}
        wrapperStyle={{
            left:{
                backgroundColor:"#550055",
            },
            right:{
                backgroundColor:"#550055", 
            }
        }}
        textStyle={{
            right:{
                color:"#fff",
            },
            left:{
                color:"#fff"
            }
        }}
        />

        )
    }
    const renderSend = (props) => {
        return(
            <Send {...props}>
                <View>
                <FontAwesome 
                name="send" 
                size={24} 
                style={{marginBottom: 10,marginRight:10}} 
                color="black" 
                />
                </View>
            </Send>
           
        )
    }

    const scrollToBottomCompenent = () => <Feather name="chevrons-down" size={24} color="black" />

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}

      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomCompenent}
      />

    )
}

