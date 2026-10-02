import { COLORS } from "../constants/colors";
import { View, Text, StyleSheet, Button, TouchableOpacity, Pressable } from "react-native";

export function ChangeGoal({onAdd, onReset}) {
    return (
        <View style={styles.container}>
            <Text style = {styles.label}>Adicionar consumo:</Text>

            
            <View style={styles.buttonRow}>
               <Pressable style={styles.button} onPress={() => onAdd(100)}>
                <Text style={styles.buttonText}>-250ml</Text>
               </Pressable>

               <Pressable style={styles.button} onPress={() => onAdd(200)}>
                <Text style={styles.buttonText}>+250ml</Text>
               </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
