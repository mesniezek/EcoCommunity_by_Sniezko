import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from "../../App";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, 'Main'>;
export default function MainScreen({navigation}: Props) {
    return (
        <SafeAreaView style={styles.background}>
            <Text style={styles.welcomeText}>Witaj, Mikołaj</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 55
    }
});