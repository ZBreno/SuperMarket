import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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
        marginTop: 35,

    },
    titleProduct: {
        width: 195,
    },

    cartShopping: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#42464D',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
})

export default styles