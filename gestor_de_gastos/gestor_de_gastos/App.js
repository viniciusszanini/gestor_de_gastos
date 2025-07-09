import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GastosProvider } from './context/GastosContext';
import { PerfilProvider } from './context/PerfilContext';
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import HistoryScreen from './screens/HistoryScreen';
import PerfilScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Resumo') iconName = 'pie-chart';
          else if (route.name === 'Registrar') iconName = 'add-circle';
          else if (route.name === 'Histórico') iconName = 'list';
          else if (route.name === 'Perfil') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Resumo" component={HomeScreen} />
      <Tab.Screen name="Registrar" component={AddExpenseScreen} />
      <Tab.Screen name="Histórico" component={HistoryScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PerfilProvider>
      <GastosProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GastosProvider>
    </PerfilProvider>
  );
}