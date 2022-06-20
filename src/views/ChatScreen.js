import { StyleSheet, View,Text,Button } from "react-native";


export default function ChatScreen(){

    return (

       <View style={styles.chatScreen}>
        <Text>Chat Screen</Text>
        <Button title="Click me" onPress={() => {}} />
       </View>

    )
}
const styles = StyleSheet.create({
    chatScreen:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    }
})