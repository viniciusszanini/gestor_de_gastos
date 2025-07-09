import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PerfilContext = createContext();

export function PerfilProvider({ children }) {
  const [perfil, setPerfil] = useState({ nome: '', email: '' });

  useEffect(() => {
    const carregarPerfil = async () => {
      try {
        const perfilSalvo = await AsyncStorage.getItem('perfil');
        if (perfilSalvo) {
          setPerfil(JSON.parse(perfilSalvo));
        }
      } catch (error) {
        console.error('Erro ao carregar perfil:', error);
      }
    };
    carregarPerfil();
  }, []);

  const atualizarPerfil = async (novoPerfil) => {
    try {
      await AsyncStorage.setItem('perfil', JSON.stringify(novoPerfil));
      setPerfil(novoPerfil);
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
    }
  };

  return (
    <PerfilContext.Provider value={{ perfil, atualizarPerfil }}>
      {children}
    </PerfilContext.Provider>
  );
}
