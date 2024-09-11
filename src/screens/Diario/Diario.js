import { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, Pressable, FlatList, Button } from 'react-native'

import NoteDetails from './NoteDetails';
import AddNote from './AddNote';

import styles from './diario_styles';


const Stack = createStackNavigator();


export default function Diario() {
  const [notes, setNotes] = useState([
    {id: '1', text: 'Essa é a nota 1, somente para testes', date: new Date().toLocaleString()},
    {id: '2', text: 'Essa é a nota 2, somente para testes', date: new Date().toLocaleString()},
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
              onPress={() => navigation.navigate('NoteDetails', { note: item})}
            >
              <Text style={styles.noteDate}>{item.date}</Text>
              <Text style={styles.noteText}>{item.text.slice(0, 30)}...</Text>
            </Pressable>
          )}
        />
        <Pressable
          style={({ pressed}) => [{
            backgroundColor: pressed ? '#ddd' : '#2196f3',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
          }
          ]}
          onPress={() => navigation.navigate( 'AddNote', {addNote})}
        >
          <Text style={{color: pressed ?'#fff' : '#000', fontSize: 18, }}> Adicionar nota </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name='ListaDeNotas' component={ListaDeNotas} options={{title: 'Minhas notas', headerTitleAlign: 'center'}} />
      <Stack.Screen name='NoteDatails' component={NoteDetails} options={{title: 'Detalhes da nota'}}/>
      <Stack.Screen name='AddNote' component={AddNote} options={{ title: 'Adicionar nova nota'}}/>
    </Stack.Navigator>
  )

}
