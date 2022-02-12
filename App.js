import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './src/screens/CalculatorScreen';
import DiceScreen from './src/screens/DiceScreen';
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
      
      <Button
      style={{margin: 10}}
        title="Calculator"
        onPress={() => navigation.navigate('Calculator')}
      />
      <Text></Text>
       <Button
        title="Dice"
        onPress={() => navigation.navigate('Dice')}
      />
    </View>
    
  );
}

function Calculator({ navigation }) {
  return <CalculatorScreen></CalculatorScreen>;
}
function Dice({ navigation }) {
  return <DiceScreen></DiceScreen>;
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{ headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Dice"
        component={Dice}
        options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
