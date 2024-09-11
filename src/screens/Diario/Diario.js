import { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Pressable, FlatList, Button } from 'react-native'

import NoteDatails from './NoteDetails';
import AddNote from './AddNote';

import styles from './diario_styles';


const Stack = createStackNavigator();


export default function Diario() {
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
              onPress={() => navigation.navigate('NoteDatails', { note: item})}
            >
              <Text style={styles.noteDate}>{item.date}</Text>
              <Text style={styles.noteText}>{item.text.slice(0, 30)}...</Text>
            </Pressable>
          )}
        />
        <Button title='Adicionar Nota' onPress={() => navigation.navigate('AddNote', {addNote})} />
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name='ListaDeNotas' component={ListaDeNotas} options={{title: 'Lista de notas'}}/>
      <Stack.Screen name='NoteDatails' component={NoteDatails} options={{title: 'Detalhes da nota'}}/>
      <Stack.Screen name='AddNote' component={AddNote} options={{ title: 'Adicionar nova nota'}}/>
    </Stack.Navigator>
  )

}
