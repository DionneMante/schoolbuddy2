import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Image, ScrollView, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const RegistrationScreen = ({navigation, route}) => {
    const [email, setEmail] =useState('');
    const [password,setPassword] = useState('');
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.input}>
                <TextInput
                style={styles.TextInput}
                placeholder="Please enter a valid email address"
                onChangeText={(email) => setEmail(email)}
                /> 
            </View> 
            <View style={styles.input}>
                <TextInput
                style={styles.inputText}
                placeholder="Please enter your password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                /> 
            </View>
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
    input: {
        backgroundColor: "white",
        borderRadius: 40,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: 'center',
        placeholderTextColor: "#003f5c"
      },
      inputText: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      }

  });