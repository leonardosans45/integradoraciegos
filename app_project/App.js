import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import { TouchableOpacity, Text, Alert } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{}}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'I-cane',
headerTitleStyle: {
  color: '#fff',
},
            headerLeft: null, // Previene volver atrás con gesture
            headerRight: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#dc3545',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 20,
                  marginRight: 10,
                }}
                onPress={() => Alert.alert('Log Out', 'Are you sure you want to log out?', [
                  { text: 'Cancel', style: 'cancel' },
                  { text: 'Log Out', onPress: () => navigation.navigate('Login') },
                ])}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Log Out</Text>
              </TouchableOpacity>
            ),
            headerBackground: () => (
              <LinearGradient
                colors={['#007bff', '#0056b3']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
            ),
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{
            title: 'Forgot Password',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
