import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    
    },
    calendario: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 15,
        position: 'relative'
    },
    miniDiario: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#fff',
        height: '50%',
        elevation: 5,
        borderRadius: 15

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
        marginLeft: 0,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    caixaInput: {
        padding: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '25%',
        backgroundColor: 'grey',
        borderRadius: 20,
        marginTop: 20

    },
    botao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
  });

export default styles;