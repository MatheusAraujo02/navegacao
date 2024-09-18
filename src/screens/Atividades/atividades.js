import { useState, useEffect} from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import Detalhes from './detalhesAtv';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Atividades() {
    const [atividades, setAtividades] = useState([]);
    // const navigation = useNavigation();
    
    const atvNavigation = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Atividades' component={Atividades}  />       
                <Stack.Screen name='Detalhes' component={Detalhes}/>       
            </Stack.Navigator>
        )    
    };

    useEffect(() => {
        const atividadeMock = [ 
            //Simulação da API
            { id: '1', title: 'Atividade 1', content: 'Conteúdo completo da Atividade 1' },
            { id: '2', title: 'Atividade 2', content: 'Conteúdo completo da Atividade 2' },
        ];
        setAtividades(atividadeMock);
    }, []);

    const renderAtividade = ({ item }) => (
        <Pressable 
        onPress={() => navigation.navigate('Detalhes', { atividade: item})}>
            <Text> {item.title} </Text>
        </Pressable>
    );
    return (
        <View>
            <FlatList 
             data={atividades}
             renderItem={renderAtividade}
             keyExtractor={(item) => item.id}
            />
        </View>
    )
}
    