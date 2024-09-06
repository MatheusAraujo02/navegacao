import { Text, View, TextInput, Pressable } from 'react-native';
import {Calendar} from 'react-native-calendars'

import styles from './diario_styles';

const Data = "Quinta"
const Dia = "04"
const Mes = "Setembro"

export default function Diario() {
  return (
    <View style={styles.container}>
      <Calendar 
      style={styles.calendario}
      
      />
      <View style={styles.miniDiario}>
        <Text style={styles.textoData}> {Data}, {Dia} de {Mes} </Text> 
        <Text style={[styles.textoPerguntas, {marginTop: 40}]}> O que te fez bem? </Text> 
        <Text style={styles.textoPerguntas}> O que te fez mal? </Text> 
        <Text style={styles.textoPerguntas}> Quais pensamentos? </Text> 
      <View style={styles.caixaInput}>
        <Pressable > 
          <Text style={styles.botao}> Escrever </Text>
        </Pressable>

      </View>

      </View>
    </View>
  );
}

