import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSrceen from './View/Cau1';
import DetailHome from './components/DetailScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    // <Screen01 />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Cau1' component={Cau1} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}