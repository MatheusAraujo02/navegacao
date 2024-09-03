import { Text, View, Image } from 'react-native';
import styles from './home_styles';

import { Ionicons, Feather} from '@expo/vector-icons';

function Teste(Text){
    <Text>Hoje é terça</Text>

}

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.containerDiario}>           
          <Ionicons name='pencil' style={{ backgroundColor: 'green', borderRadius: 7, padding: 6, marginLeft: 26, fontSize: 30,}}/> 
          
          <View>  
            <Text style={styles.titleDiario}> Diário </Text>
            <Text style={[styles.titleDiario, {fontSize: 16, marginLeft: 12,}]}> Como foi seu dia? </Text>
          </View>
            <Image source={require('../../../assets/MetadeCaderno.png')} style={{ justifyContent: 'flex-end', marginLeft: 'auto' }} />  
        </View>

        <View style={styles.containerEmocao}>
          <Feather name='smile' style={{ backgroundColor: '#0E920A', borderRadius: 7, padding: 6, marginLeft: 26, fontSize: 30,}}/>  
        
          <View>         
            <Text style={styles.titleEmocao}>Emoção</Text>
            <Text style={[styles.titleEmocao, {fontSize: 16, marginLeft: 8}]}> Defina sua emoção agora </Text>          
          </View>
            <Image source={require('../../../assets/FloresEmocoes.png')} style={{height: 106, justifyContent: 'flex-end', marginLeft: 'auto', borderTopRightRadius: 20, borderBottomRightRadius: 20}} />
        </View>

        <View style={styles.containerAtividades}>
          <Ionicons name='book-outline' style={{ backgroundColor: '#0E920A', borderRadius: 7, padding: 6, marginLeft: 26, fontSize: 30,}}/>  
          
          <View>
            <Text style={styles.titleAtividades}>Atividades</Text>
            <Text style={[styles.titleAtividades, {fontSize: 16, marginLeft: 7}]}> Conteúdos adicionais</Text>
          </View>
          <Image source={require('../../../assets/FloresAtividade.png')} style={{height: 106, justifyContent: 'flex-end', marginLeft: 'auto', borderTopRightRadius: 20, borderBottomRightRadius: 20}} />
        </View>

        <View style={styles.containerProxSessao}>
          <Text style={styles.titleProxSessao}>Proxima sessão</Text>
          <Ionicons name='calendar-outline' style={{ fontSize: 25, color: '#0E920A', position: 'absolute', marginLeft: 20}}/>
          <Text style={ styles.titleData }> </Text>
        </View>
    </View>
  );
}

/* o padding do container estava fazendo a imagem nao chegar no final do container principal que é o retangulo verde escuro. 
Tirando ele e mexendo somendo no marginLeft do titulo e do emoticon deu pra fazer ela ficar no lugar certo
só falta testar em outros dispositivos 
  
*/

