import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather} from '@expo/vector-icons';

import Home from '../screens/Home/Home';
import Diario from '../screens/Diario/Diario';
import Emocao from '../screens/Emocao/Emocao';

const Tab = createBottomTabNavigator();


export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={ {
            headerShown: false,
            tabBarActiveTintColor: 'darkgreen',
            tabBarInactiveTintColor: 'grey'
            }}
        >
            <Tab.Screen
            name='Home'
            component={Home}
            options={{
                tabBarIcon: ({ focused, size,}) => <Feather name='home'  color={focused ? 'darkgreen' : 'grey' } size={ size }/>,
                tabBarLabel: 'Início',
               
            }}
        />

         <Tab.Screen
            name='Diario'
            component={Diario}
            options={{
                tabBarIcon: ({ focused, size,}) => <Feather name='book' color={ focused ? 'darkgreen' : 'grey'  } size={ size }/>,
                tabBarLabel: 'Diário',
            }}
        />

         <Tab.Screen
            name='Emocao'
            component={Emocao}
            options={{
                tabBarIcon: ({ focused, size}) => <Feather name='smile' color={ focused ? 'darkgreen' : 'grey'  } size={ size }/>,
                tabBarLabel: 'Emoção'
            }}
        />
        </Tab.Navigator>
    )
}

// parei aqui tentando colocar cor no texto dos botoes
