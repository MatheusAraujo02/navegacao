import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // display: 'flex',
      alignItems: 'center',
    },
    containerDiario: {  
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'darkgreen',
      padding: 20, 
      marginTop: 80,
      borderRadius: 20,
      width: '90%',
      height: "20%",
    },
    containerDiario2: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginLeft: 20 

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
      marginLeft: 20,
    },
    titleDiario2: { //"Como foi seu dia?"
      justifyContent: 'flex-start',
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',

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
    emoteDiario: {

      }
  });

  export default styles;