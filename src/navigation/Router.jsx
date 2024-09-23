import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import { Platform } from 'react-native';

const Stack = createNativeStackNavigator();

//*Screen İmport
import LoginScreen from '../screens/LoginScreen';
import SingUpScreen from '../screens/SingUpScreen';

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SingUpScreen} />
    </Stack.Navigator>
  );
};

export default Router;
