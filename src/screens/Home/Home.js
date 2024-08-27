import { Text, View } from 'react-native';
import styles from './home_styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerDiario}>
        <Text style={styles.titleDiario}>Diario</Text>
      </View>

      <View style={styles.containerEmocao}>
        <Text style={styles.titleEmocao}>Emoção</Text>
      </View>

      <View style={styles.containerAtividades}>
       <Text style={styles.titleAtividades}>Atividades</Text>
      </View>
    </View>
  );
}


