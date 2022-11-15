import { StyleSheet, Text, View, FlatList } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label:'Deposito Bancário',
    value:' 4.395,90',
    date: '13/10/2022',
    type: 1 // revenue
  },
  {
    id: 2,

    label: 'Conta de luz',
    value: '300,90',
    date: '09/11/2022',
    type: 0 // expenses
  },
  {
    id: 3,
    label:'Salário',
    value:'7.350,00',
    date: '05/11/2022',
    type: 1
  },
  {
    id: 4,
    label:'Supermercado',
    value:'2.350,00',
    date: '05/11/2022',
    type: 0
  }
];

//rnfunc to create a new func
export default function Home({navigation, route}) {
  let name=route.params.name;

  return (
    <View style={styles.container}>
      <Header name={name}/>
      <Balance saldo="19.250,90" gastos="3.012,50"/>
      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin:14,
  },
  list:{
    marginStart: 14,
    marginEnd:14,
  }
});
