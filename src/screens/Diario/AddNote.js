import { useState} from 'react'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

const AddNote = ({ navigation, route }) => {
  const { addNote } = route.params;
  const [newNote, setNewNote] = useState('');

  const handleSave = () => {
    if (newNote) {
      addNote(newNote);
      navigation.goBack(); // Voltar para a lista de notas
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={10}
        placeholder="Escreva sua nova nota aqui..."
        value={newNote}
        onChangeText={setNewNote}
      />
      <Pressable 
        style={({ pressed }) => [{
          backgroundColor: pressed ? 'grey' : 'darkgreen',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }
        ]}
        onPress={handleSave}
      >  
        {({ pressed}) => (
          <Text style={{color: pressed ? '#000' : '#fff', fontSize: 18, }}> Salvar nota </Text>
)}

      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});

export default AddNote;