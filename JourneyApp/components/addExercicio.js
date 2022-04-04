import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Line } from '../styles/global';

export default function AddExercicio({ submitHandler }) {
  [text, setText] = useState('');
  [text2, setText2] = useState('');


  const changeHandler = (val) => {
    setText(val);

  };
  const changeHandler2 = (val) => {
    setText2(val);

  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='novo exercicio...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='#6D28D9' onPress={() => submitHandler(text)} title='Adicionar Exercicio' />
      <Line />
      <TextInput 
        style={styles.input} 
        placeholder='escreve como te sentes...'
        onChangeText={changeHandler2} 
        value={text2} 
      />
      <Button color='#6D28D9' onPress={() => submitHandler(text2)} title='Como te sentes' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#6D28D9',
  },
});

