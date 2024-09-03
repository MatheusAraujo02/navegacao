import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';

import TabRoutes from "./tab.routes";
import Config from "../screens/config/config";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor: 'darkgreen', 
            drawerInactiveTintColor: 'grey',
            title: '',
        }
        }>
            <Drawer.Screen
                name='Inicio'
                component={TabRoutes}
                options={{
                    drawerIcon: ({ focused, size,}) => <Feather name='home'  color={focused ? 'darkgreen' : 'grey' } size={ size }/>,
                    drawerLabel: 'Início',
            }}
            
            />
               <Drawer.Screen
                name='Config'
                component={Config}
                options={{
                    drawerIcon: ({ focused, size,}) => <Feather name='settings'  color={focused ? 'darkgreen' : 'grey' } size={ size }/>,
                    drawerLabel: 'Configurações',
            }}
            
            />
        </Drawer.Navigator>
    )
}