import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './drawer.routes';
// import { AtividadesProvider } from '../screens/Atividades/atividades_context';


export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    )
}
