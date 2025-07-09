import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar() {
  const url = `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70 + 1)}`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
