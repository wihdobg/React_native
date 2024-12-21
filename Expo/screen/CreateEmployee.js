import { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        style={styles.inputstyle}
        theme={theme}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.inputstyle}
        theme={theme}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        mode="outlined"
        style={styles.inputstyle}
        theme={theme}
        keyboardType="number-pad"
      />
      <TextInput
        label="Salary"
        value={salary}
        onChangeText={(text) => setSalary(text)}
        mode="outlined"
        style={styles.inputstyle}
        theme={theme}
        keyboardType="number-pad"
      />
      <Button
        icon="upload"
        style={styles.btn}
        mode="contained"
        theme={theme}
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        icon="content-save"
        style={styles.btn}
        mode="contained"
        theme={theme}
        onPress={() => setModal(true)}
      >
        Save
      </Button>
      {/* Modal View */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        theme={theme}
        onRequestClose={() => setModal(false)}
        onPress
      >
        <View style={styles.modalview}>
          <View style={styles.btncontainer}>
            <Button
              icon="camera"
              mode="contained"
              style={styles.btn}
              theme={theme}
              onPress={() => setModal(false)}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              onPress={() => setModal(false)}
              theme={theme}
              style={styles.btn}
            >
              From Gallery
            </Button>
          </View>
          <Button icon="camera" onPress={() => setModal(false)} theme={theme}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </Modal>
      {/* End Of Modal  */}
    </View>
  );
};

const theme = {
  colors: {
    primary: "red",
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  inputstyle: {
    margin: 5,
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalview: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
  },
  btn: {
    marginTop: 20,
    borderRadius: 10,
    fontSize: 16,
  },
});

export default CreateEmployee;
