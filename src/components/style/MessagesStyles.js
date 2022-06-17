
import styled from "styled-components/native"


export const Container = styled.View`
flex:1;
padding-left:20px;
padding-right:20px;
align-items:center;
background-color:#fff;
`;

export const Card = styled.TouchableOpacity`
width:100%;
`;

export const UserInfo = styled.View`
flex-direction:row;
justify-content:space-between;
`;

export const UserImgWrapper = styled.View`
padding-top:15px;
padding-bottom:15px;
`;

export const UserImg = styled.Image`
width:50px;
height:50px;
border-radius:25px;
`;

export const TextSection = styled.View`
flex-direction:column;
justify-content:center;
padding:15px;
padding-left:10px;
width:300px;
border-bottom-width:1px;
border-bottom-color:#cccccc;
`;

export const UserInfoText = styled.View`
flex-direction:row;
justify-content: space-between;
margin-bottom:5px;
`;

export const UserName = styled.Text`
font-size:14px;
font-weight:bold;
font-family:"Lato-Regular";
`;

export const postTime = styled.Text`
font-size: 6px;
color:#66666;
font-family:"Lata-Regular";
`;

export const MessageText = styled.Text`
font-size:14px;
color:#33333;
`;