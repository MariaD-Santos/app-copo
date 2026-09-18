

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Meu APP- SENAI</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'red'
  }
});
