import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import despesasFixas from '../data/expenses';

export const GastosContext = createContext();

export function GastosProvider({ children }) {
  const [registros, setRegistros] = useState([]);

  // Carrega registros salvos ao montar
  useEffect(() => {
    const carregarRegistros = async () => {
      try {
        const dados = await AsyncStorage.getItem('registros');
        if (dados) {
          setRegistros(JSON.parse(dados));
        } else {
          setRegistros(despesasFixas);
        }
      } catch (error) {
        console.error('Erro ao carregar registros:', error);
        setRegistros(despesasFixas);
      }
    };
    carregarRegistros();
  }, []);

  
  useEffect(() => {
    const salvarRegistros = async () => {
      try {
        await AsyncStorage.setItem('registros', JSON.stringify(registros));
      } catch (error) {
        console.error('Erro ao salvar registros:', error);
      }
    };
    if (registros.length > 0) {
      salvarRegistros();
    }
  }, [registros]);

  const adicionarRegistro = (registro) => {
    if (registro && typeof registro.valor === 'number' && typeof registro.descricao === 'string') {
      setRegistros((prev) => [registro, ...prev]);
    } else {
      console.warn('Registro inválido:', registro);
    }
  };

  return (
    <GastosContext.Provider value={{ registros, adicionarRegistro }}>
      {children}
    </GastosContext.Provider>
  );
}

