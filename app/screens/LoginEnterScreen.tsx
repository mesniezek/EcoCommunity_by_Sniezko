import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../App';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'LoginEnter'>;
export default function LoginEnterScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.background}>
      <Image style={styles.logoSmall} source={require('../assets/small_logo_nobg.png')}/>
      <Image style={styles.logoText} source={require('../assets/logo_text_nobg.png')}/>
      
      <TouchableOpacity style={styles.loginButtonContainer} onPress={() => navigation.goBack()}>
        <Text style={styles.loginButtonText}>Powrót</Text>
      </TouchableOpacity>
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
    logoSmall: { width: 400, height: 250, position: 'absolute', top: 80 },
    logoText: { width: 300, height: 80, position: 'absolute', top: 300 },
    loginButtonContainer: {
      width: '80%', height: 50, backgroundColor: '#045634d2',
      justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginBottom: 70,
    },
    loginButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});