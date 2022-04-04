import React from 'react';
import { Text, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';

const ComentariosInput = () => {
    const [text, onChangeText] = React.useState("Comentarios");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput 
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                label="Exercicio"              
                placeholder="Escreva Aqui"
                activeUnderlineColor="yellow"
                underlineColor="purple"
                keyboardType="default"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  export default ComentariosInput;