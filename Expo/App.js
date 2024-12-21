import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./screen/Home";
import CreateEmployee from "./screen/CreateEmployee";
import Profile from "./screen/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="createEmployee" component={CreateEmployee} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#ebebeb",
  //   marginTop: Constants.statusBarHeight,
  //   // alignItems: "center",
  //   // justifyContent: "center",
  // },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
