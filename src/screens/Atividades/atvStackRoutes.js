import { createStackNavigator } from '@react-navigation/stack';

import Atividades from './atividades'
import Detalhes from './detalhesAtv';

const Stack = createStackNavigator();

export default function AtvStackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name=' Atividades ' component={ Atividades }/>
            <Stack.Screen name=' Detalhes ' component={ Detalhes }/>
        </Stack.Navigator>
    )
}