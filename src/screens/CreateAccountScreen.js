import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View,Image, ScrollView, TextInput, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RegistrationScreen } from './RegistrationScreen';
export const CreateAccountScreen = ({navigation,route}) => {
    const [email, setEmail] =useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <Text>Lets get started! Create your account below</Text>
            </View>
            <View style={styles.input}>
                <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                onChangeText={(firstName) => setFirstName(firstName)}
                /> 
            </View> 
            <View style={styles.input}>
                <TextInput
                style={styles.TextInput}
                placeholder="Last Name"
                onChangeText={(lastName) => setLastName(lastName)}
                /> 
            </View> 
            <View style={styles.input}>
                <TextInput
                style={styles.TextInput}
                placeholder="Email Address"
                onChangeText={(email) => setEmail(email)}
                /> 
            </View> 
            <View style={styles.input}>
                <TextInput
                style={styles.inputText}
                placeholder="Password at least 8 characters"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
                /> 
            </View>
            <Button style= {styles.button} title="Already have an account? Log in here" color="black"
            onPress={() => navigation.navigate('Registration')}/>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
        marginTop: 200,
    },
    input: {
        backgroundColor: "white",
        borderRadius: 40,
        width: "80%",
        height: 45,
        marginBottom: 20,
        marginTop:20,
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
})