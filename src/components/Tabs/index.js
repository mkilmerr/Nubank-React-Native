import React from 'react';
import { Container, TabsContainer, TabsItem, TabsText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
//show_chart
const Tabs = ({ translateY }) => {
    return (
        <Container
            style = {{
                transform : [{
                    translateY : translateY.interpolate({
                        inputRange : [0,380],
                        outputRange : [0,30],
                        extrapolate : 'clamp'
                    })
                }],
                opacity : translateY.interpolate({
                    inputRange : [0,380],
                    outputRange : [1, 0.2],
                    extrapolate : 'clamp'
                })
            }}
        >
            <TabsContainer>
                <TabsItem>
                    <Icon name="person-add"  size={28} color="#fff"/>
                    <TabsText>Indicar amigos</TabsText>
                </TabsItem>
                <TabsItem>
                <Icon name="import-export"  size={28} color="#fff"/>
                 <TabsText>Transferir</TabsText>
            </TabsItem>
            <TabsItem>
            <Icon name="attach-money"  size={28} color="#fff"/>
            <TabsText>Cobrar</TabsText>
            </TabsItem>
            <TabsItem>
            <Icon name="money-off"  size={28} color="#fff"/>
            <TabsText>Bloquear cartão</TabsText>
        </TabsItem>
        <TabsItem>
            <Icon name="show-chart"  size={28} color="#fff"/>
            <TabsText>Ajustar limite</TabsText>
        </TabsItem>
            </TabsContainer>
        </Container>
    )
}

export default Tabs