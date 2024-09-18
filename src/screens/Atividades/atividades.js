import { useState, useEffect} from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Atividades() {
    const [atividades, setAtividades] = useState([]);
    const navigation = useNavigation();

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
    