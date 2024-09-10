import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    botaoDiario: {     

    },
    containerDiario: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#d9d9d9',
        borderRadius: 20,
        width: '85%',
        height: "15%",
        elevation: 5
        },
    title: {
        top: 10,
        left: 10,
        flexWrap: 'wrap'
    },
    containerBotao: {
        alignSelf: 'flex-end',
        right: 25,

    },
  });

export default styles;