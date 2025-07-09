import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FinancialSummary from '../components/FinancialSummary';
import { GastosContext } from '../context/GastosContext';

export default function HomeScreen() {
  const { registros } = useContext(GastosContext);

  const totalReceitas = registros
    .filter(r => r && typeof r.valor === 'number' && r.valor >= 0)
    .reduce((acc, r) => acc + r.valor, 0);

  const totalDespesas = registros
    .filter(r => r && typeof r.valor === 'number' && r.valor < 0)
    .reduce((acc, r) => acc + r.valor, 0);

  const saldoFinal = totalReceitas + totalDespesas;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo Financeiro</Text>
      <FinancialSummary
        receitas={totalReceitas}
        despesas={Math.abs(totalDespesas)}
        saldo={saldoFinal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});