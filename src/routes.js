import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from '../src/pages/Main';
import { StyleSheet } from  'react-native'
const MainNavigator = createStackNavigator({
  Main: {
    screen:Main,
   
      navigationOptions:{
          headerStyle:{
              backgroundColor: '#8B10AE',
              
          },
          headerTintColor:'#fff'
      },
  }
 
});

const Routes = createAppContainer(MainNavigator);

export default Routes;