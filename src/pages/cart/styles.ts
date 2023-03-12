import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titlePage:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    cardProduct: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        margin: 10,
        marginTop: 20,
        padding: 5,
       


    },

    infoProduct: {
        marginTop: 15,

    },
    titleProduct: {
        width: 195,
    },
})

export default styles