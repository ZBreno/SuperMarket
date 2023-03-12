import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ItemsMarket } from "../pages/items";
import { CartShopping } from "../pages/cart";

const Stack = createNativeStackNavigator();

const ScreenRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={ItemsMarket} />
        <Stack.Screen name="Cart" component={CartShopping} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { ScreenRoutes };
