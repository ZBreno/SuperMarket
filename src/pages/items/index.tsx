import React, { useState } from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemsMarket: React.FC = () => {
  interface ItemData {
    id: string;
    image: any;
    name: string;
    price: number;
    quantity: number;
  }

  const [productsCart, setProductsCart] = useState([]);
  const navigation = useNavigation();

  const save = async (item: ItemData) => {
    try {
      const listOfProducts = [...productsCart];

      const index = productsCart.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        listOfProducts[index].quantity += 1;
      } else {
        listOfProducts.push(item);
      }

      setProductsCart(listOfProducts);
      await AsyncStorage.setItem("@App", JSON.stringify(listOfProducts));
    } catch (err) {
      alert(err);
    }
  };
  const products: ItemData[] = [
    {
      name: "Café Nescafé Solúvel Original 200g",
      image: require("../../assets/Nescafe-product.png"),
      price: 7.59,
      id: "1",
      quantity: 1,
    },

    {
      name: "Fio Dental Johnson e johnson Reach Essencial Menta 100m",
      image: require("../../assets/fioDental.png"),
      price: 11.5,
      id: "2",
      quantity: 1,
    },

    {
      name: "Bombom Sonho de Valsa 1kg",
      image: require("../../assets/sonhoDeValsa.png"),
      price: 50.9,
      id: "3",
      quantity: 1,
    },
    {
      name: "Desodorante Above Aerosol Neymar Jr",
      image: require("../../assets/desodoranteAbove.png"),
      price: 8.0,
      id: "4",
      quantity: 1,
    },
    {
      name: "Biscoito Toddy Wafer Chocolate 94g",
      image: require("../../assets/biscoitoToddy.png"),
      price: 2.05,
      id: "5",
      quantity: 1,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartShopping}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          SuperMarket
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}

        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <View style={styles.cardProduct}>
            <View>
              <Image
                style={{
                  width: 120,
                  height: 120,
                  marginLeft: 10,
                  marginTop: 20,
                }}
                source={item.image}
              />
            </View>

            <View style={styles.infoProduct}>
              <TouchableOpacity onPress={() => save(item)}>
                <FontAwesome
                  name="cart-plus"
                  size={24}
                  color="black"
                  style={{ position: "absolute", left: 200, top: -20 }}
                />
              </TouchableOpacity>
              <View style={styles.titleProduct}>
                <Text style={{ fontWeight: "400", fontSize: 18 }}>
                  {item.name}
                </Text>
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 30 }}>
                R$ {item.price}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export { ItemsMarket };
