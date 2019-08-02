import styled from 'styled-components/native';
import { Animated } from 'react-native';
export const Container = styled.View`
  background-color : #8b10ae;
  flex : 1;
`;

export const Content = styled.View`
  flex : 1;
  max-height : 400px;
  z-index : 5

`;

export const Card = styled(Animated.View)`
  background : #fff;
  flex : 1;
  margin : 0 20px;
  height : 100%;
  position : absolute;
  left: 0;
  right : 0;
  top : 0px;
`;

export const CardHeader = styled.View`
  margin : 0 20px;
  flex-direction : row
`;

export const CardContent = styled.View`
  margin : 0 20px;
`;



export const Title = styled.Text`
  font-size : 18px;
  margin-left : 18px;
  margin-top: 8px;
`;

export const SecondTitle = styled.Text`
  color : #15DDF3;
  font-size : 23px;
  font-weight : bold;
  margin-top: 100px;
`;

export const MoneyValue = styled.Text`
  color : #15DDF3;
  font-weight : bold;
`;
export const MoneySimbol = styled.Text`
  color : #15DDF3;  
  font-size : 38px;
`;
export const AvaiableLimitText = styled.Text`
  font-weight : 700;
`;

export const AvaiableLimitPrice = styled.Text`
  color : #17E14D;
  font-size : 18px;
  font-weight : bold;
`;
export const CardFooter = styled.View`
  padding : 30px;
  background : #eee;
  border-radius : 4px;
  margin-top:70px;
 
`;
export const Annotation = styled.Text`

`;

