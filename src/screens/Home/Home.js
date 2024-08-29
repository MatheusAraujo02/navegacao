import { Text, View } from 'react-native';
import styles from './home_styles';

import { Feather} from '@expo/vector-icons';


export default function Home() {
  return (
    <View style={styles.container}>
          <View style={styles.containerDiario}>         
            <Text style={styles.emoteDiario}> <Feather name='home' color={'white'} size={30} /> </Text>
          <View style={styles.containerDiario2}>  
            <Text style={styles.titleDiario}> Diario </Text>
            <Text style={styles.titleDiario2}> Como foi seu dia? </Text>
          </View>
          
        </View>

        <View style={styles.containerEmocao}>
          <Text style={styles.titleEmocao}>Emoção</Text>
        </View>

        <View style={styles.containerAtividades}>
          <Text style={styles.titleAtividades}>Atividades</Text>
        </View>
        <View style={styles.containerProxSessao}>
          <Text style={styles.titleProxSessao}>Proxima sessão</Text>
        </View>
    </View>
  );
}


