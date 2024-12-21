import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = () => {
  const data = [
    {
      id: "1",
      name: "mohamed",
      job: "Web Dev",
    },
    {
      id: "2",
      name: "ALi",
      job: "Engineer",
    },
    {
      id: "3",
      name: "Ahmed",
      job: "Web Application",
    },
    {
      id: "4",
      name: "Omar",
      job: "Data Science",
    },
    {
      id: "5",
      name: "Omar",
      job: "Data Science",
    },
    {
      id: "6",
      name: "Omar",
      job: "Data Science",
    },
    {
      id: "7",
      name: "Omar",
      job: "Data Science",
    },
    {
      id: "8",
      name: "Omar",
      job: "Data Science",
    },
    {
      id: "9",
      name: "Omar",
      job: "Data Science",
    },
  ];

  const renderList = ({ item, navigation }) => {
    return (
      <Card style={{ marginTop: 20, padding: 20 }}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri: "https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: 500 }}>{item.name}</Text>
            <Text style={styles.job}>{item.job}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.myCard}>
      <FlatList
        data={data}
        renderItem={renderList}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <FAB
        icon="plus"
        color="white"
        style={[styles.fab, { backgroundColor: "blue" }]}
        onPress={() => console.log("Pressed")}
        size="medium"
        theme={{ colors: { accent: "blue" } }}
        onLongPress={() => navigation.navigate("createEmployee")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myCard: {
    padding: 20,
    flex: 1,
  },
  cardView: {
    flexDirection: "row",
  },
  job: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 20,
  },
});

export default Home;
