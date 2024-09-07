import { useState} from 'react';
import { Text, View, Pressable } from 'react-native';
import {Calendar, DateString} from 'react-native-calendars'

import styles from './diario_styles';



export default function Diario() {
  
  const [day, setDay] = useState()
  
  return (
    <View style={styles.container}>
      <Calendar 
      style={styles.calendario}
      theme={{
        monthTextColor: '#000',
        todayTextColor: 'darkgreen',
        selectedDayBackgroundColor :'darkgreen',
        selectedDayTextColor: '#fff',
      }}
      onDayPress={setDay}
      markedDates={
        day && {
          [day.DateString]: {selected: true} 
      }}

      

      
      />
      <View style={styles.miniDiario}>
        <Text style={styles.textoData}>  {day} </Text> 
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

