import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.background}>
      <Image style={styles.logoSmall} source={require('../assets/small_logo_nobg.png')}/>
      <Image style={styles.logoText} source={require('../assets/logo_text_nobg.png')}/>
      <TouchableOpacity
        style={styles.loginButtonContainer}
        onPress={() => navigation.navigate('LoginEnter')}>
        <Text style={styles.loginButtonText}>Zaloguj się</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButtonContainer}>
        <Text style={styles.registerButtonText}>Zarejestruj się</Text>
      </TouchableOpacity>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#f8f4f4',
      alignItems: 'center',
    },
    logoSmall: {
      width: 400,
      height: 250,
      position: 'absolute',
      top: 80,
    },
    logoText: {
      width: 300,
      height: 80,
      position: 'absolute',
      top: 300,
    },
    loginButtonContainer: {
      width: '60%',
      height: 50,
      backgroundColor: '#045634d2',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      marginBottom: 20,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    registerButtonContainer: {
      width: '60%',
      height: 50,
      backgroundColor: '#f8f4f4',
      borderColor: '#045634d2',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      marginBottom: 70,
    },
    registerButtonText: {
      color: '#045634d2',
      fontSize: 18,
      fontWeight: 'bold',
    },
})