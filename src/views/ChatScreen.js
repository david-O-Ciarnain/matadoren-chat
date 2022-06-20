import { useCallback, useEffect, useState } from "react";
<<<<<<< HEAD
import { StyleSheet, View } from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

=======
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
>>>>>>> f7ecd6cc3563d55303f937a1000f93e5f4c94b1c

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

<<<<<<< HEAD
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
=======
  const onSend = useCallback((messages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, messages));
  }, []);
>>>>>>> f7ecd6cc3563d55303f937a1000f93e5f4c94b1c

  const renderBubble = (props) => {
    return (
      <ImageBackground source={require("../../assets/chatBackgrund.jpg")}>
        <Bubble
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: "#fff",
            },
            right: {
              backgroundColor: "#000",
            },
          }}
          textStyle={{
            right: {
              color: "#fff",
              textAlign: "center",
            },
          }}
        />
      </ImageBackground>
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
<<<<<<< HEAD
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomCompenent}
      />

    )
}0
=======
    />
  );
}
>>>>>>> f7ecd6cc3563d55303f937a1000f93e5f4c94b1c
const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
