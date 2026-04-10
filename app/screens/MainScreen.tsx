import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from "../../App";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, 'Main'>;
export default function MainScreen({navigation}: Props) {
    return (
        <SafeAreaView style={styles.background}>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});