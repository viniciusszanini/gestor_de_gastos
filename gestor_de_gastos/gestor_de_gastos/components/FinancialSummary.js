import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FinancialSummary({ receitas, despesas, saldo }) {
  const saldoColor = saldo >= 0 ? '#008000' : '#cc0000';

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Receitas:</Text>
        <Text style={styles.valorPositivo}>R$ {receitas.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Despesas:</Text>
        <Text style={styles.valorNegativo}>R$ {despesas.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Saldo:</Text>
        <Text style={[styles.saldo, { color: saldoColor }]}>
          R$ {saldo.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
  },
  valorPositivo: {
    fontSize: 16,
    color: '#008000',
    fontWeight: 'bold',
  },
  valorNegativo: {
    fontSize: 16,
    color: '#cc0000',
    fontWeight: 'bold',
  },
  saldo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
