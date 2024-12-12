import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* En-tête du Drawer */}
      <View style={styles.header}>
        <Image
          source={require("../assets/ali.jpg")} // Changez le chemin de l'image
          style={styles.profileImage}
        />
        <Text style={styles.username}>Administrator</Text>
        <Text style={styles.email}>admin@example.com</Text>
      </View>

      {/* Liste des éléments du Drawer */}
      <View style={styles.menuItems}>
        <DrawerItemList {...props} /> 
        {/* Section Logout rapprochée ici */}
        <TouchableOpacity style={styles.giveUpSection} onPress={() => props.navigation.closeDrawer()}>
          <Icon name="exit-outline" size={25} color="#7A7777" />
          <Text style={styles.giveUpText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingTop: 0, // Supprime l'espace blanc en haut
  },
  header: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#336699",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#FFF",
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  email: {
    fontSize: 14,
    color: "#D8D8D8",
    marginBottom: 10,
  },
  menuItems: {
    flex: 1,
    marginTop: 50, // Réduit l'espace entre l'en-tête et les éléments
    paddingHorizontal: 10,
  },
  giveUpSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 0, // Espace minimal entre Logout et la dernière section
   
    
  },
  giveUpText: {
    fontSize: 16,
    color: "#646363",
    marginLeft: 29,
    fontWeight: "450",
  },
});
