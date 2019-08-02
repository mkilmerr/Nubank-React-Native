import React from 'react';
import { Logo, Container, NameUser, Top } from './styles';
import IconNu from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Header = () =>{
    return(
       <Container>
         <Top>
            <Logo source={IconNu}/>
            <NameUser>Kilmer</NameUser>
         </Top>
         <Icon name="keyboard-arrow-down" size={30} color="#fff"/>
       </Container>
        

    )
}

export default Header