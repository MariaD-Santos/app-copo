import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants/colors";

export function HealthTip({ }) {
    return (
        <View style={styles.container}>
            <Text>Dica de saúde</Text>
            <Text style={styles.title}>Beber água regularmante melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4,
    },
});