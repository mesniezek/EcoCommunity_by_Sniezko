import { StyleSheet, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, View, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../App';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Login'>;
export default function LoginScreen({navigation}: Props) {

  const [login, onChangeLogin] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

    const validateForm = () => {
    if (!login || !password) {
      setErrorMessage('Wszystkie pola są wymagane.');
      return false;
    }
    setErrorMessage('');
    return true;
  }

  const confirmLogin = () => {
    if (validateForm()) {
        // Tutaj można dodać logikę logowania użytkownika, np. wysłanie danych do serwera
        alert('Logowanie zakończone sukcesem!');
        navigation.navigate('Main');
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, width: '100%' }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            <Image
              style={styles.logoFull} 
              source={require('../assets/full_logo_nobg.png')} 
            />

            <View style={styles.input}>
              <TextInput
                style={{paddingLeft: 25, flex: 1}}
                onChangeText={onChangeLogin}
                value={login}
                placeholder={'Login'}
              />
              <Image
                source={require('../assets/avatar.png')}
                style={styles.image}
              ></Image>
            </View>

            <View style={styles.input}>
              <TextInput
                style={{paddingLeft: 25, flex: 1}}
                onChangeText={onChangePassword}
                value={password}
                placeholder='Hasło'
                secureTextEntry={true}
              />
              <Image
                source={require('../assets/padlock.png')}
                style={styles.image}
              ></Image>
            </View>

            {
                errorMessage ? (
                <Text style={{ color: 'red', marginBottom: 10, textAlign: 'center' }}>
                    {errorMessage}
                </Text>
                ) : null
            }

            <Text style={styles.forgotPassword} onPress={() => alert('Funkcja przypomnienia hasła nie jest jeszcze dostępna.')}>
              Zapomniałeś hasła?
            </Text>
                        
            <TouchableOpacity
              onPress={confirmLogin}
              style={styles.logInButtonContainer} 
            >
              <Text style={styles.logInButton}>Zaloguj</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.goBackButtonContainer} 
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.goBackButton}>Powrót</Text>
            </TouchableOpacity>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: '#f8f4f4',
      alignItems: 'center',
    },
    forgotPassword: {
      fontSize: 16,
      color: '#045634d2',
    },
    goBackButton: {
      color: '#045634d2',
      fontSize: 16, 
      fontWeight: 'bold' 
    },
    goBackButtonContainer: {
      width: '60%',
      height: 40,
      backgroundColor: '#f8f4f4',
      borderColor: '#045634d2',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      marginBottom: 20,
      marginTop: 10,
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    logInButton: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    logInButtonContainer: {
      width: '60%', 
      height: 40, 
      backgroundColor: '#045634d2',
      justifyContent: 
      'center', 
      alignItems: 'center', 
      borderRadius: 25, 
      marginTop: 30
    },
    logoFull: { 
      width: 400, 
      height: 250,
      marginBottom: 130,
      top: 80 
    },
    image: {
      width: 20,
      height: 20,
      position: 'absolute',
      left: 10,
      top: 10,
      opacity: 0.7,
      color: '#045634d2',
    },
    input: {
      height: 40,
      width: '70%',
      marginBottom: 5,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#fff',
      borderColor: '#045634d2',
      borderRadius: 25,
    }
});