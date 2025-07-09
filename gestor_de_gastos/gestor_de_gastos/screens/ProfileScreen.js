import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { PerfilContext } from '../context/PerfilContext';

export default function PerfilScreen() {
  const { perfil, atualizarPerfil } = useContext(PerfilContext);

  const [nome, setNome] = useState(perfil.nome);
  const [email, setEmail] = useState(perfil.email);

  useEffect(() => {
    setNome(perfil.nome);
    setEmail(perfil.email);
  }, [perfil]);

  const handleSalvar = () => {
    if (!nome || !email) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    atualizarPerfil({ nome, email });
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Perfil</Text>
      <CustomInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <CustomInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <CustomButton title="Salvar" onPress={handleSalvar} />
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
});
