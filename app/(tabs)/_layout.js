import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../assets/colors";
import { Provider } from "react-redux";
import store from "../../store";

export default function layout() {
  return (
    <Provider store={store}>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              color: "black",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Feather name="home" size={24} color={colors.primary} />
              ) : (
                <Feather name="home" size={24} color="black" />
              ),
          }}
        />
        <Tabs.Screen
          name="basket"
          options={{
            tabBarLabel: "Basket",
            tabBarLabelStyle: {
              color: "black",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="basket-outline"
                  size={24}
                  color={colors.primary}
                />
              ) : (
                <Ionicons name="basket-outline" size={24} color="black" />
              ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            tabBarLabel: "Orders",
            tabBarLabelStyle: {
              color: "black",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="account-details"
                  size={24}
                  color={colors.primary}
                />
              ) : (
                <MaterialCommunityIcons
                  name="account-details"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
      </Tabs>
    </Provider>
  );
}
