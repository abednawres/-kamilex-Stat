import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,TextInput,Image,} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import MyLineChart from "../components/MyLineChart";
import InfoCard from "../components/InfoCard";

// Importez les écrans déjà définis dans AppNavigator.js
import UsersManagementScreen from "../screens/UsersManagementScreen";
import CompaniesScreen from "../screens/CompaniesScreen";
import ValuesManagementScreen from "../screens/ValuesManagementScreen";
import FolderManagementScreen from "../screens/FolderManagementScreen";
import TokenManagementScreen from "../screens/TokenManagementScreen";

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function DashboardContent({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* App Bar */}
      <View style={styles.appBarContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIconContainer}
        >
          <Icon name="arrow-left" size={18} color="white" style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      {/* Page Title */}
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

      <MyLineChart />

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

export default function DashboardWithBottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "UsersManagement") {
            iconName = focused ? "users" : "users";
          } else if (route.name === "TokenManagement") {
            iconName = focused ? "bar-chart" : "bar-chart";
          } else if (route.name === "Companies") {
            iconName = focused ? "building" : "building-o";
          } else if (route.name === "FolderManagement") {
            iconName = focused ? "folder" : "folder-o";
          } else if (route.name === "ValuesManagement") {
            iconName = focused ? "warning" : "warning-o";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#9DB0CE",
        tabBarInactiveTintColor: "#C9C9C9",
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardContent} />
      <Tab.Screen name="UsersManagement" component={UsersManagementScreen} />
      <Tab.Screen name="TokenManagement" component={TokenManagementScreen} />
      <Tab.Screen name="Companies" component={CompaniesScreen} />
      <Tab.Screen name="FolderManagement" component={FolderManagementScreen} />
      <Tab.Screen name="ValuesManagement" component={ValuesManagementScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FAFAFA",

  },
  appBarContainer: {
    height: 80,
    backgroundColor: '#336699',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backIconContainer: {
    position: "absolute",
    left: 20,
  },
  backIconContainer: {
    position: "absolute",
    left: 20,
    top: 50, // Ajustez cette valeur pour déplacer l'icône vers le bas
  },
  backIcon: {
    transform: [{ translateY: -5 }],
  },
  titleContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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