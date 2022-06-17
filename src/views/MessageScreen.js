import { Button, FlatList, StyleSheet, View,Text } from "react-native";
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    postTime,
    MessageText,
    TextSection
} from "../components/style/MessagesStyles"



export default function MessageScreen(){

    const testData = [
        {
            id: "1",
            userName:"demo",
            userImg: require("../../assets/loginscreen2.jpg"),
            messageTime:"200 years ago",
            messageText:"viva la revolution"
        },
        {
            id: "2",
            userName:"demo",
            userImg: require("../../assets/splash(this).png"),
            messageTime:"300 years ago",
            messageText:"america F**k yeah"
        },
        {
            id: "3",
            userName:"sven",
            userImg: require("../../assets/icon.png"),
            messageTime:"100 years ago",
            messageText:"socsarna tar över"
        },
        {
            id: "4",
            userName:"team tripple d",
            userImg: require("../../assets/favicon.png"),
            messageTime:"1 hour ago",
            messageText:"guns'n roses suger"
        }
    ]

    return ( 
        <Container>
            <FlatList 
                data={testData}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                  <Card>
                    <UserInfo>
                        <UserImgWrapper>
                            <UserImg source={item.userImg}/>
                        </UserImgWrapper>
                        <TextSection>
                            
                            <UserInfoText>
                            <UserName>{item.userName}</UserName>
                            <postTime>{item.messageTime}</postTime>
                            </UserInfoText>
                            <MessageText>{item.messageText}</MessageText>
                            
                        </TextSection>
                    </UserInfo>
                  </Card>
                )}
            />
           
        </Container>
    )
}

const styles = StyleSheet.create({

    messageScreen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})