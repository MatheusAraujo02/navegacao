import { Text, View, Image } from 'react-native';
import styles from './home_styles';

import { Ionicons} from '@expo/vector-icons';


export default function Home() {
  return (
    <View style={styles.container}>
          <View style={styles.containerDiario}> 
          <Image 
            source={require('../../../assets/Media.png')}
            style={{
              zIndex: 0,
              height: '90%',

            }}
            />  
            <Ionicons name='book' style={styles.emoteDiario}/> 
          
          <View>  
            <Text style={styles.titleDiario}> Diario </Text>
            <Text style={[styles.titleDiario, {fontSize: 16}]}> Como foi seu dia? </Text>
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


