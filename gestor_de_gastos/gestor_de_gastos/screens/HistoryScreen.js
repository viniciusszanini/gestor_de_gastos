import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ExpenseCard from '../components/ExpenseCard';
import { GastosContext } from '../context/GastosContext';

export default function HistoryScreen() {
  const { registros } = useContext(GastosContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Registros</Text>
      {registros.length === 0 ? (
        <Text style={styles.empty}>Nenhum registro encontrado.</Text>
      ) : (
        <FlatList
          data={registros}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ExpenseCard registro={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  empty: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 50,
  },
});