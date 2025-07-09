import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExpenseCard({ registro }) {
  if (!registro || typeof registro.valor !== 'number') {
    return null;
  }

  const corValor = registro.valor >= 0 ? '#4caf50' : '#f44336';

  return (
    <View style={styles.card}>
      <Text style={styles.descricao}>{registro.descricao}</Text>
      <Text style={[styles.valor, { color: corValor }]}>  
        {registro.valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
      <Text style={styles.categoria}>{registro.categoria}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 18,
    marginVertical: 4,
  },
  categoria: {
    fontSize: 14,
    color: 'gray',
  },
});

