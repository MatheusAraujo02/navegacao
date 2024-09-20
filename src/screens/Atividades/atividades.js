import { useState, useEffect} from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './atividades_styles';
import Detalhes from './detalhesAtv';

const Stack = createStackNavigator();

export default function Atividades() {
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        const atividadeMock = [
            {ati_id: 1, ati_data: new Date().toLocaleString(), ati_descricao: 'Teste, esta é a atividade 1',},
            {ati_id: 2, ati_data: new Date().toLocaleString(), ati_descricao: 'Teste, esta é a atividade 2',},
        ];
        setAtividades(atividadeMock);
    }, []);

    const ListarAtividades =({ navigation }) => {
        return(
        <View style={styles.container}>
          <FlatList 
            data={atividades}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={styles.atvItem}
                onPress={() => navigation.navigate( 'Detalhes', {atividade: item})}
              >
                <Text style={styles.ati_data}>{item.ati_data}</Text>
                <Text style={styles.ati_descricao}>{item.ati_descricao}</Text>
              </Pressable>
            )}
            />
        </View>
        )
    };
    return (
      <Stack.Navigator>
        <Stack.Screen name='ListarAtividades' component={ListarAtividades} options={{title: 'Atividades', headerTitleAlign: 'center'}} />       
       <Stack.Screen name='Detalhes' component={Detalhes} options={{title: 'Detalhes da Atividade', headerTitleAlign: 'center'}}/>       
      </Stack.Navigator>
    )

}
// import { useNavigation } from '@react-navigation/native';
// 
//     const navigation = useNavigation();

//     useEffect(() => {
//         const atividadeMock = [ 
//             //Simulação da API
//             { id: '1', title: 'Atividade 1', content: 'Conteúdo completo da Atividade 1' },
//             { id: '2', title: 'Atividade 2', content: 'Conteúdo completo da Atividade 2' },
//         ];
//         setAtividades(atividadeMock);
//     }, []);

//     const renderAtividade = ({ item }) => (
//         <Pressable 
//         onPress={() => navigation.navigate('Detalhes', { atividade: item})}>
//             <Text> {item.title} </Text>
//         </Pressable>
//     );
//     return (
//         <View>
//             <FlatList 
//              data={atividades}
//              renderItem={renderAtividade}
//              keyExtractor={(item) => item.id}
//             />
//         </View>
//     )
// }
    
// const atvNavigation = () => {
//     return (
      
//     )    
// };