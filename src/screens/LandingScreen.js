import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, TextInput, Button, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RegistrationScreen} from './RegistrationScreen';
import { CreateAccountScreen } from './CreateAccountScreen';



export const LandingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Text style={styles.text}>Schoolbuddy :)</Text>
            <Button style= {styles.button} title="Get Started" color="black"
            onPress={() => navigation.navigate('CreateAccount')}/>
        </View>   
    );
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    text :{
        fontSize: 40,
        fontWeight:'50000',
        color: '#fff', 
        marginBotton : 800,
    },
    button:{
        marginTop: 200,
    }
  });

  