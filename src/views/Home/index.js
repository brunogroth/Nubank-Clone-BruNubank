import { StyleSheet, Text, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Bruno Groth"/>
      <Balance/>
      <Text>Homepage here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
