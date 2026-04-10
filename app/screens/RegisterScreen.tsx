import { StyleSheet, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, View, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../App';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Register'>;
export default function RegisterScreen({navigation}: Props) {

  const [login, onChangeLogin] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const validateForm = () => {
    if (!login || !password || !confirmPassword) {
      setErrorMessage('Wszystkie pola są wymagane.');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Hasła muszą być takie same.');
      return false;
    }
    setErrorMessage('');
    return true;
  }

  const confirmRegistration = () => {
    if (validateForm()) {
        // Tutaj można dodać logikę rejestracji użytkownika, np. wysłanie danych do serwera
        alert('Rejestracja zakończona sukcesem!');
        navigation.goBack();
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
                style={{paddingLeft: 25, paddingRight: 40, flex: 1}}
                onChangeText={onChangePassword}
                value={password}
                placeholder='Hasło'
                secureTextEntry={!passwordVisible}
              />
             <TouchableOpacity 
                style={styles.showPassword}
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Image
                    source={passwordVisible ? require('../assets/eye_open.png') : require('../assets/eye_closed.png')}
                    style={styles.showPassword}
                ></Image>
              </TouchableOpacity>
              <Image
                source={require('../assets/padlock.png')}
                style={styles.image}
              ></Image>
            </View>

            <View style={styles.input}>
              <TextInput
                style={{paddingLeft: 25, paddingRight: 40, flex: 1}}
                onChangeText={onChangeConfirmPassword}
                value={confirmPassword}
                placeholder='Powtórz hasło'
                secureTextEntry={!confirmPasswordVisible}
              />
              <TouchableOpacity 
                style={styles.showPassword}
                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                <Image
                    source={confirmPasswordVisible ? require('../assets/eye_open.png') : require('../assets/eye_closed.png')}
                    style={styles.showPassword}
                ></Image>
              </TouchableOpacity>
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

            <TouchableOpacity 
              style={styles.logInButtonContainer} 
              onPress={confirmRegistration}
            >
              <Text style={styles.logInButton}>Zarejestruj się</Text>
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
    },
    showPassword: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 5,
        top: 5,
        opacity: 0.7,
        color: '#045634d2',
    },
});