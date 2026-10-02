import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants/colors";

export function HealthTip({ }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dica de saúde</Text>
            <Text style={styles.subtitle}>Beber água regularmante melhora a concentração, a digestão e mantém a sua energia alta ao longo do dia!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 24,
    },
    titleTip: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain,
    },
    subtitleTip: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4,
    },
});