import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
height : 100px;
margin-top : 20px;
`;


export const TabsContainer = styled.ScrollView.attrs({
    horizontal : true,
    contentContainerStyle : { paddingLeft : 10, paddingRight : 20},
    showsHorizontalScrollIndicator : false
  })``;

export const TabsItem = styled.View`
  width : 120px;
  height : 120px;
  background-color  : rgba(255,255,255,0.2);
  margin-left : 10px;
  justify-content : space-between;
 
`;

export const TabsText = styled.Text`
  font-size : 18px;
  color : #fff;
  margin-top:45px;
  margin-left: 8px;
  top : -20px;

`;