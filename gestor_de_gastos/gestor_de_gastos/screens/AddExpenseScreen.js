import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { GastosContext } from '../context/GastosContext';

export default function AddExpenseScreen({ navigation }) {
  const { adicionarRegistro } = useContext(GastosContext);

  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('despesa');

  const handleAddRegistro = () => {
    if (!descricao || !valor || !categoria) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const valorFinal = tipo === 'despesa' ? -Math.abs(parseFloat(valor)) : Math.abs(parseFloat(valor));

    const novoRegistro = {
      id: Date.now(),
      descricao,
      valor: valorFinal,
      categoria,
      tipo,
    };

    adicionarRegistro(novoRegistro);
    navigation.navigate('Histórico');

    setDescricao('');
    setValor('');
    setCategoria('');
    setTipo('despesa');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar</Text>
      <CustomInput label="Descrição" value={descricao} onChangeText={setDescricao} placeholder="Ex: Salário, Aluguel..." />
      <CustomInput label="Valor" value={valor} onChangeText={setValor} placeholder="Ex: 200" keyboardType="numeric" />
      <CustomInput label="Categoria" value={categoria} onChangeText={setCategoria} placeholder="Ex: Alimentação, Moradia..." />

      <View style={styles.tipoContainer}>
        <CustomButton
          title="Despesa"
          onPress={() => setTipo('despesa')}
          style={[styles.tipoButton, tipo === 'despesa' ? styles.active : styles.inactive]}
        />
        <CustomButton
          title="Receita"
          onPress={() => setTipo('receita')}
          style={[styles.tipoButton, tipo === 'receita' ? styles.active : styles.inactive]}
        />
      </View>

      <CustomButton title="Registrar" onPress={handleAddRegistro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tipoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tipoButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  active: {
    backgroundColor: '#4caf50',
  },
  inactive: {
    backgroundColor: '#ccc',
  },
});