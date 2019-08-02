import React from 'react';
import { Container, Card, Content, CardHeader, Title, SecondTitle,CardContent, MoneySimbol, MoneyValue , AvaiableLimitText, AvaiableLimitPrice, CardFooter, Annotation} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import {PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';




const Main = () =>{
  
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

    return (
        <Container>
            <Header/>
         
                <Content>
                <Menu translateY={translateY}/>
               <PanGestureHandler
                onGestureEvent = {animatedEvent}
                onHandlerStateChange = {onHandlerStateChange}
               >
               <Card style={{
                transform: [{
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                }],
              }}
              >
                        <CardHeader>
                            <Icon name = "picture-in-picture" size = {40}/>
                            <Title>Cartão de Crédito</Title>
                        </CardHeader>
                    <CardContent>
                        <SecondTitle>Fatura Atual</SecondTitle>
                        <MoneySimbol>R$ <MoneyValue>179,15</MoneyValue></MoneySimbol>
                        <AvaiableLimitText>Limite disponível <AvaiableLimitPrice>R$ 46,66</AvaiableLimitPrice></AvaiableLimitText>
                    </CardContent>
                    <CardFooter>
                        <Annotation>Transferência de R$ 500,50 de Diego da Silva recebida</Annotation>
                    </CardFooter>
                   
                    </Card>
                    </PanGestureHandler>
            </Content>
            <Tabs translateY={translateY}/>
        </Container>
    )
}

export default Main