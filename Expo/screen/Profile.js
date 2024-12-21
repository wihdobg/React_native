import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Linking,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button } from "react-native-paper";

const Profile = () => {
  const openDial = () => {
    if ((Platform.OS = "android")) {
      Linking.openURL("tel:1234");
    } else {
      Linking.openURL("telprompt");
    }
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#0033ff", "#6bc1ff"]}
        style={styles.background}
      />
      <View
        style={{
          marginTop: -70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 140, height: 140, borderRadius: 70 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s",
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>Mohamed Salah</Title>
        <Text style={{ fontSize: 15 }}>Web Developer</Text>
      </View>
      <View style={styles.info}>
        <Card
          style={styles.card}
          onPress={() => Linking.openURL("abc@abc.com")}
        >
          <View style={styles.cardContent}>
            <MaterialIcons name="email" size={24} color="#006aff" />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>
              MohamedWihdobgSalah@gmail.com
            </Text>
          </View>
        </Card>
        <Card style={styles.card} onPress={openDial}>
          <View style={styles.cardContent}>
            <MaterialIcons name="local-phone" size={24} color="#006aff" />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>01009867363</Text>
          </View>
        </Card>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <MaterialIcons name="attach-money" size={24} color="#006aff" />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>Web Developer</Text>
          </View>
        </Card>
      </View>
      {/* button  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-around",
          flex: 1,
          paddingBottom: 40,
        }}
      >
        <Button
          icon="account-edit"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Delete
        </Button>
      </View>
      {/* end of Button */}
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "25%",
  },
  card: {
    width: width - 20,
    marginHorizontal: "auto",
    marginBottom: 20,
  },
  info: {
    marginVertical: 20,
  },

  cardContent: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
  },
});

export default Profile;
