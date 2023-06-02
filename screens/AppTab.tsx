import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AppList from './AppList';
import AppForm from './AppForm';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTab() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: "#32264d", //cor da fonte quando aba selecionada;
                    tabBarInactiveTintColor: "#c1bccc", //cor da fonte quando aba não-selecionada
                    tabBarActiveBackgroundColor: "#ebebf5", // cor de fundo da aba quando selecionada
                    tabBarInactiveBackgroundColor: "#fafafc", //cor de fundo da aba quando não-selecionada
                    tabBarLabelStyle: { //estilos da label da aba (mexi no posicionamento e tamanho)
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    tabBarIconStyle: { display: "none" },
                    headerShown: false
                }}
            >
                <Screen 
                    name="AppList" 
                    component={AppList}
                    options={{
                        tabBarLabel: "Compras"
                    }} 
                />
                <Screen 
                    name="AppForm" 
                    component={AppForm}
                    options={{
                        tabBarLabel: "Adicionar"
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}