import { View, Text, StyleSheet} from "react-native";
import { COLORS } from "../constants/colors";

export function WaterProgress({consumed, goal}){
    
    const percentage = Math.min(100, Math.round((consumed/goal)*100))
    
    return(
        <View>
            <Text>Você bebeu {consumed}ml hoje</Text>
            <Text>Você atingiu {percentage}% da meta diaria</Text>
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${percentage}%` } ]}/>
            </View>
        </View>
    )
    
}
const styles = StyleSheet.create({


  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
});