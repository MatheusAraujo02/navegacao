import { View, Text, Pressable } from 'react-native'
import { Ionicons, Feather } from 'react-native-vector-icons'

import styles from './diario_styles';

export default function Diario(){
    return (
      <View style={styles.container}>
        <View style={styles.containerBotao}>
          <Pressable style={styles.botaoDiario}>
            <Ionicons name='pencil' style={{ backgroundColor: 'green', borderRadius: 7, padding: 6, fontSize: 30}}/> 
          </Pressable>
        </View>

        <View style={styles.containerDiario}>                     
            <Text style={styles.title}>   </Text>         
        </View>
        
        <View style={styles.containerDiario}>                     
            <Text style={styles.title}>   </Text>         
        </View>
       
        <View style={styles.containerDiario}>                     
            <Text style={styles.title}>   </Text>         
        </View>
        
        <View style={styles.containerDiario}>                     
            <Text style={styles.title}>   </Text>         
        </View>
       
        <View style={styles.containerDiario}>                     
            <Text style={styles.title}>   </Text>         
        </View>
   
      
      </View>
    )
}