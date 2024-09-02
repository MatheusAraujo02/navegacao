import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      // marginLeft: 40,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-evenly'
    },
    containerDiario: {  
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#233d2b',
      // padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: "26.3%",

    },
    titleDiario: { //"Diário"
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    containerEmocao: {
      flexDirection: 'row',
      backgroundColor: '#233d2b',
      alignItems: 'center',
      // padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: '14%',
    },
    titleEmocao: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    containerAtividades: {
      flexDirection: 'row',
      backgroundColor: '#233d2b',
      alignItems: 'center',
      // padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: '14%',
    },
    titleAtividades: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    containerProxSessao: {
      flexDirection: 'row',
      backgroundColor: '#233d2b',
      alignItems: 'center',
      padding: 20, 
      borderRadius: 20,
      width: '90%',
      height: '14%',
    },
    titleProxSessao: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
  
  });

  export default styles;