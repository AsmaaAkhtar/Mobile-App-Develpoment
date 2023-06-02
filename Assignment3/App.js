import react from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

import SignupScreen from './SigupScreen';

export default function (){
   const Stack = createNativeStackNavigator();
  return(
<View style={styles.container}> 
     <NavigationContainer>
   <Stack.Navigator initialRouteName='HomeScreen'>
       <Stack.Screen name='Login' component={LoginScreen} options={{ headerStyle: { backgroundColor: "steelblue" } }}/>

      <Stack.Screen name='Home' component={HomeScreen}options={{ headerStyle: { backgroundColor: "steelblue" } }}
    
  />
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerStyle: { backgroundColor: "steelblue" } }}
    />
    
     </Stack.Navigator>
     </NavigationContainer>
    
   
    </View>

  )
}



const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:"center",
  backgroundColor:"grey",
  
}

})