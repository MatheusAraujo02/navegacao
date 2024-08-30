import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginLeft: 40,
      // flex: 1,
      // display: 'flex',
      // alignItems: 'center',
    },
    containerDiario: {  
      display: 'grid',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'darkgreen',
      padding: 20, 
      marginTop: 80,
      borderRadius: 20,
      width: '65%',
      height: "20%",

    },
    emoteDiario: {
      backgroundColor: 'green',
      borderRadius: 7,
      padding: 6,
      marginLeft: 10,
      fontSize: 30,

      },
    containerEmocao: {
      backgroundColor: 'darkgreen',
      padding: 20, 
      marginTop: 35,
      borderRadius: 20,
      width: '90%',
      height: '12%',
    },
    containerAtividades: {
      backgroundColor: 'darkgreen',
      padding: 20, 
      marginTop: 35,
      borderRadius: 20,
      width: '90%',
      height: '12%',
    },
    containerProxSessao: {
      backgroundColor: 'darkgreen',
      padding: 20, 
      marginTop: 35,
      borderRadius: 20,
      width: '90%',
      height: '12%',
    },
    titleDiario: { //"Diário"
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    titleEmocao: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    titleAtividades: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
      titleProxSessao: {
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold',
    },
  
  });

  export default styles;