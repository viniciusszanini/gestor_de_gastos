import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CustomInput({ label, value, onChangeText, placeholder, keyboardType }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
});
