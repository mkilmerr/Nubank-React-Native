import React, { Component} from 'react';
import { Container, Code, Nav, NavItems, NavText,SignOutButton,SignOutButtonText } from './styles';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Menu = ({translateY}) => {
    return(
        <Container 
            style = {{
                opacity : translateY.interpolate({
                    inputRange : [0, 150],
                    outputRange : [0,1]
                })
            }}
        >
            <Code>
                <QRCode
                value={'http://facebook.github.io/react-native/'}
                size={80}
                bgColor='#8b10ae'
                fgColor='#8b10ae'/>
            </Code>
            <Nav>
                <NavItems>
                    <Icon name = "help-outline" size = {20} color = "#fff"/>
                    <NavText>Me ajuda</NavText>
                </NavItems>
                <NavItems>
                    <Icon name = "person-outline" size = {20} color = "#fff"/>
                    <NavText>Perfil</NavText>
                </NavItems>
                <NavItems>
                    <Icon name = "credit-card" size = {20} color = "#fff"/>
                    <NavText>Configurar cartão</NavText>
                </NavItems>
                <NavItems>
                    <Icon name = "smartphone" size = {20} color = "#fff"/>
                    <NavText>Configurações do app</NavText>
                </NavItems>
            </Nav>
            <SignOutButton onPress={()=>{}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}

export default Menu

