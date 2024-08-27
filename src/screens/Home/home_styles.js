import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    containerDiario: {
      backgroundColor: '#000',
      padding: 20, 
      margin: 60,
      borderRadius: 20,
      width: '80%'
    },
    containerEmocao: {
      backgroundColor: '#000',
      padding: 20, 
      width: '80%',
      borderRadius: 20,
      marginBottom: 20,
    },
    containerAtividades: {
      backgroundColor: '#000',
      padding: 20, 
      width: '80%',
      borderRadius: 20,
    },
    titleDiario: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    titleEmocao: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    titleAtividades: {
      fontSize: 22,
      fontWeight: 'bold',
    },
  });

  export default styles;