import { COLORS } from "../constants/colors";
import { View, Text, Pressable } from "react-native";

export function ChangeGoal({onAdd}) {
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

