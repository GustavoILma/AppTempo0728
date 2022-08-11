import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Api from './components/Api';
import Tempo from './components/Tempo';


export default function App() {
  const [dados, setDados] = useState("");

  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=d831a418&city_name=Mongagua,SP`)
    setDados(response.data.forecast[0]);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}> Previsão do Tempo</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.label}> Cidade: </Text>
        <TextInput
        placeholder='Digite aqui sua cidade'
        style={styles.input}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao} onPress = {carregaDados}>
          <Text style={styles.textobotao}> Buscar </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <Tempo/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    titulo:{
      marginTop: 30,
      fontSize:30,
      textAlign:'center'
    },
    label:{
      fontSize:20
    },
    bloco:{
      marginTop: 30,
      marginLeft:'20%'
    },
    input:{
      borderBottomWidth:2,
      width: '80%',
      fontSize: 20
    },
    botao:{
      width:'80%',
      backgroundColor:'#000',
      alignItems:'center'
    },
    textobotao:{
      fontSize:20,
      color:'#FFF'
    }
});
