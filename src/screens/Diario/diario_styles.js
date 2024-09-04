import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    
    },
    calendario: {

    },
    miniDiario: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#fff',
        height: '50%',
        elevation: 5,

    },
    textoData: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
        },
    textoPerguntas: {
        justifyContent: 'space-around',
        marginTop: 10,
        margin: 10,
        fontSize: 15
    }
  });

export default styles;