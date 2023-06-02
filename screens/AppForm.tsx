import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Database from './Database';
 
export default function AppForm() {
    const navigation = useNavigation<any>();
    const [ descricao, setDescricao ] = useState('');
    const [ quantidade, setQuantidade ] = useState('');

    function handleDescriptionChange(descricao){
        setDescricao(descricao);
    }

    function handleQuantityChange(quantidade){
        setQuantidade(quantidade);
    }

    async function handleButtonPress(){ 
      const listItem = {descricao, quantidade: parseInt(quantidade)};
      Database.saveItem(listItem)
        .then(response => navigation.navigate("AppList", listItem));
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para comprar</Text>

      <View style={styles.inputContainer}>
        <TextInput
            onChangeText={handleDescriptionChange} 
            style={styles.input} 
            placeholder='O que está faltando em casa?'
            clearButtonMode='always'
        />

        <TextInput 
            onChangeText={handleQuantityChange}
            style={styles.input} 
            placeholder='Digite a quantidade'
            keyboardType='numeric'
            clearButtonMode='always'
        />

        <TouchableOpacity 
            style={styles.button}
            onPress={handleButtonPress}
            >
                <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="light" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})