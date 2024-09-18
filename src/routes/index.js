import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './drawer.routes';
import AtvStackRoutes from '../screens/Atividades/atvStackRoutes';


export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}
