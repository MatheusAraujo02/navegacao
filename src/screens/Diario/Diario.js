import { useState} from 'react';
import { Text, View, Pressable } from 'react-native';
import {Calendar, LocaleConfig, DateData } from 'react-native-calendars'
import { DayState } from 'react-native-calendars/src/types';

// import { ptBR } from '../../components/localeCalendarConfig';
import styles from './diario_styles';

// LocaleConfig.locales['pt-Br'] = ptBR
// LocaleConfig.defaultLocale = 'pt-br'

const Data = "Quinta"
const Dia = "04"
const Mes = "Setembro"

export default function Diario() {
  // const [day, setDay] = useState<DateData>() 
  
  return (
    <View style={styles.container}>
      <Calendar 
      style={styles.calendario}
      onDayPress={console.log}

      
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

