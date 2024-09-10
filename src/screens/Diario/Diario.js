import { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Pressable, FlatList, Button } from 'react-native'

import Detalhes from './Detalhes';
import AddNotas from './addNotas';

import styles from './diario_styles';

const Stack = createStackNavigator;



export default function Diario(){
  const [notes, setNotes] = useState([
    {id: '1', text: 'Essa é a nota 1, somente para testes', date: new Date().toLocaleString},
    {id: '2', text: 'Essa é a nota 2, somente para testes', date: new Date().toLocaleString},
  ]);
  
  const addNote = (newNote) => {
    setNotes([...notes, { id: Date.now().toString(), text: newNote, date: new Date().toLocaleString() }]);
  };

  const ListaDeNotas = ({ navigation }) => {
    return(
      <View style={styles.container}>
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Pressable 
              style={styles.noteItem} 
              onPress={() => navigation.navigate('Detalhes', { note: item})}
            >
              <Text style={styles.noteDate}>{item.date}</Text>
              <Text style={styles.noteText}>{item.text.slice(0, 30)}...</Text>
            </Pressable>
          )}
        />
        <Button title='Adicionar Nota' onPress={() => navigation.navigate('AddNota', {addNote})} />
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name='Diario' component={Diario}/>
      <Stack.Screen name='Detalhes' component={Detalhes} options={{title: 'Detalhes da nota'}}/>
      <Stack.Screen name='AddNotas' component={AddNotas} options={{ title: 'Adicionar nova nota'}}/>
    </Stack.Navigator>
  )

}