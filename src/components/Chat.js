import { useState } from "react";
import { Text, View } from "react-native";




export default function Chat(){
    const [message,setMessage] = useState({
        username:"test",
        time:"",
        message:"hello"
    })

    const [sendMessages,setSendMessages] = useState([])



   


   

    console.log( sendMessages)

    return (
        <View>
            <Text>{message.username}</Text>
        </View>
    )
}