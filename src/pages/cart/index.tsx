import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartShopping: React.FC = () => {

    const [products, setProducts] = useState([])

    const load = async () => {
        try {
            const response = await AsyncStorage.getItem("@App")
            if (response?.length > 0) {
                const obj = JSON.parse(response)
                setProducts(obj)

            }

        }
        catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.titlePage}>
            <FontAwesome
                  name="cart-plus"
                  size={24}
                  color="black"
                  style={{ marginRight: 10}}
                />
                <Text
                    style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 5, }}
                >Carrinho de compras</Text>
            </View>
            <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={product => product.id}
                renderItem={({ item }) =>
                    <View style={styles.cardProduct}>


                        <View>
                            <Image
                                style={{ width: 120, height: 120, marginLeft: 10, marginTop: 10, }}
                                source={item.image}
                            />
                        </View>


                        <View style={styles.infoProduct}>
                            <View style={styles.titleProduct}>
                                <Text
                                    style={{ fontWeight: '400', fontSize: 18, }}
                                >{item.name}</Text>
                            </View>
                            <Text       
                                style={{ fontSize: 12, marginTop: 5, }}
                            >Quantidade: {item.quantity}</Text>
                            <Text
                                style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10, }}
                            >R$ {item.price}</Text>


                        </View>


                    </View>
                }

            />


        </View>
    )
}

export {CartShopping}