import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MyLineChart from "../components/MyLineChart";
import InfoCard from "../components/InfoCard";

export default function Dashboard({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.appBarContainer}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity> */}
      </View>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.menuIconContainer}
        >
          <Icon name="bars" size={24} color="#336699" style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <Text style={styles.adminText}>Hello Administrator</Text>
      <Text style={styles.infoText}>
        The following data pertains to your app
      </Text>
      <TextInput
        style={styles.searchInput}
        placeholder="search..."
        placeholderTextColor="#C9C9C9"
      />

      {/* Ajouter l'histogramme ici */}
      <MyLineChart />

      {/* Ajouter les cartes ici */}
      <InfoCard
        title="Total Users"
        value="1500"
        description="Find the total number of users here."
        onPress={() => navigation.navigate("UsersManagement")}
        imageSource={require("../assets/totalUsers.png")}
      />
      <InfoCard
        title="Total tokens spent"
        value="3000"
        description="Find the total number of tokens spent here."
        onPress={() => navigation.navigate("TokenManagement")}
        imageSource={require("../assets/Graphlines.png")}
      />
      <InfoCard
        title="Total companies"
        value="250"
        description="Find the total number of companies here."
        onPress={() => navigation.navigate("Companies")}
        imageSource={require("../assets/Group 237922.png")}
      />
      <InfoCard
        title="Folders created"
        value="75"
        description="Find the total number of created files here."
        onPress={() => navigation.navigate("FolderManagement")}
        imageSource={require("../assets/stat3.png")}
      />
      <InfoCard
        title="Values unretrieved"
        value="5"
        description="Valeurs qui n'ont pas été récupérées."
        onPress={() => navigation.navigate("ValuesManagement")}
        imageSource={require("../assets/stat4.png")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FAFAFA",
    paddingBottom: 20,
  },
  appBarContainer: {
    height: 80,
    justifyContent: "center",
    paddingLeft: 25,
    backgroundColor: "#336699",
    zIndex: 999,
  },
  titleContainer: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  menuIconContainer: {
    position: "absolute",
    left: 20,
  },
  menuIcon: {
    transform: [{ translateY: -5 }],
  },
  title: {
    fontSize: 30,
    color: "#336699",
    marginBottom: 20,
    marginLeft: 120,
  },
  adminText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
    color: "#85A8CC",
    textAlign: "left",
    marginLeft: 20,
  },
  infoText: {
    fontSize: 18,
    marginTop: 20,
    color: "#8C9999",
    textAlign: "left",
    marginLeft: 20,
  },
  searchInput: {
    height: 45,
    width: "90%",
    borderColor: "#C9C9C9",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: "5%",
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
});
