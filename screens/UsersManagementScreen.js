import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import UserHistogram from "../components/UserHistogram";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import UserList from "../components/UserList";

export default function UsersManagement({ navigation }) {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [filterType, setFilterType] = useState("");

  // Exemple de données pour les sociétés
  const companiesData = [
    { id: 1, title: "NOVATION CITY" },
    { id: 2, title: "PROXYM" },
    { id: 3, title: "ENOVA ROBOTICS" },
  ];

  // Liste des roles pour le filtrage
  const rolesOptions = [
    { id: 1, label: "Admin", value: "admin" },
    { id: 2, label: "Developer", value: "developer" },
    { id: 3, label: "Product-Owner", value: "product-owner" },
  ];
  // Liste des usersnames pour le filtrage
  const usersnamesOptions = [
    { id: 1, label: "Ahmed", value: "ahmed" },
    { id: 2, label: "Imen", value: "imen" },
    { id: 3, label: "Aziz", value: "aziz" },
    { id: 4, label: "Wiem", value: "wiem" },
    { id: 5, label: "Aymen", value: "aymen" },
  ];
  const usersData = [
    {
      id: 1,
      username: "Alice",
      role: "Admin",
      joiningDate: "2024-01-15",
      email: "alice@example.com",
      profileImage: require("../assets/profil1.png"),
    },
    {
      id: 2,
      username: "Bob",
      role: "User",
      joiningDate: "2024-02-20",
      email: "bob@example.com",
      profileImage: require("../assets/profil2.png"),
    },
    {
      id: 3,
      username: "Charlie",
      role: "Moderator",
      joiningDate: "2024-03-10",
      email: "charlie@example.com",
      profileImage: require("../assets/profil3.png"),
    },
    {
      id: 4,
      username: "David",
      role: "User",
      joiningDate: "2024-04-05",
      email: "david@example.com",
      profileImage: require("../assets/profil4.png"),
    },
    {
      id: 5,
      username: "Bob",
      role: "User",
      joiningDate: "2024-02-20",
      email: "bob@example.com",
      profileImage: require("../assets/profil2.png"),
    },
    {
      id: 6,
      username: "Alice",
      role: "Admin",
      joiningDate: "2024-01-15",
      email: "alice@example.com",
      profileImage: require("../assets/profil1.png"),
    },
    {
      id: 7,
      username: "Bob",
      role: "User",
      joiningDate: "2024-02-20",
      email: "bob@example.com",
      profileImage: require("../assets/profil2.png"),
    },
    {
      id: 8,
      username: "Charlie",
      role: "Moderator",
      joiningDate: "2024-03-10",
      email: "charlie@example.com",
      profileImage: require("../assets/profil3.png"),
    },
    {
      id: 9,
      username: "David",
      role: "User",
      joiningDate: "2024-04-05",
      email: "david@example.com",
      profileImage: require("../assets/profil4.png"),
    },
    {
      id: 10,
      username: "Bob",
      role: "User",
      joiningDate: "2024-02-20",
      email: "bob@example.com",
      profileImage: require("../assets/profil2.png"),
    },

    {
      id: 1,
      username: "Alice",
      role: "Admin",
      joiningDate: "2024-01-15",
      email: "alice@example.com",
      profileImage: require("../assets/profil1.png"),
    },
    {
      id: 2,
      username: "Bob",
      role: "User",
      joiningDate: "2024-02-20",
      email: "bob@example.com",
      profileImage: require("../assets/profil2.png"),
    },
    {
      id: 3,
      username: "Charlie",
      role: "Moderator",
      joiningDate: "2024-03-10",
      email: "charlie@example.com",
      profileImage: require("../assets/profil3.png"),
    },
    {
      id: 4,
      username: "David",
      role: "User",
      joiningDate: "2024-04-05",
      email: "david@example.com",
      profileImage: require("../assets/profil4.png"),
    },
    {
      id: 5,
      username: "Bob",
      role: "User",
      joiningDate: "2024-02-20",
      email: "bob@example.com",
      profileImage: require("../assets/profil2.png"),
    },
    {
      id: 6,
      username: "Alice",
      role: "Admin",
      joiningDate: "2024-01-15",
      email: "alice@example.com",
      profileImage: require("../assets/profil1.png"),
    },
  ];

  // Gérer l'ouverture et la fermeture du modal
  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <ScrollView style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBarContainer}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Titre de la page */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Folder Management</Text>
        <Image
          source={require("../assets/user.png")}
          style={styles.userImage}
        />
      </View>

      {/* Champ de filtrage */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCompany}
          onValueChange={(itemValue) => setSelectedCompany(itemValue)}
          style={styles.pickerText}
        >
          <Picker.Item label="Select a company" value="" />
          {companiesData.map((company) => (
            <Picker.Item
              key={company.id}
              label={company.title}
              value={company.title}
            />
          ))}
        </Picker>
      </View>

      {/* Premier Sous-titre */}
      <Text style={styles.subTitle}>
        Please review the evolution of the number of users
      </Text>

      {/* Intégration du composant userHistogram */}
      <UserHistogram />

      {/* Deuxième Sous-titre */}
      <Text style={styles.subTitle}>Please see the list of users :</Text>

      {/* Champ de Recherche  */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search..."
        />
        {/* Bouton de filtrage */}
        <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
          <Icon name="sort" size={20} color="#D0D0D0" />
        </TouchableOpacity>
      </View>

      {/* Modal de filtrage */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* AppBar avec icône de fermeture */}
            <View style={styles.modalAppBar}>
              <Text style={styles.modalAppBarTitle}>Filter Options</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Icon name="times" size={24} color="#ffffff" />
              </TouchableOpacity>
            </View>

            {/* Espacement entre l'AppBar et les champs de filtrage */}
            <View style={styles.modalContent}>
              {/* Sous-titre et Picker pour sélectionner un rôle */}
              <Text style={styles.filterSubTitle}>Select a Role</Text>
              <View style={styles.pickerWithBorder}>
                <Picker
                  selectedValue={filterType}
                  onValueChange={(itemValue) => setFilterType(itemValue)}
                  style={styles.pickerText}
                >
                  <Picker.Item label="Select role" value="" />
                  {rolesOptions.map((role) => (
                    <Picker.Item
                      key={role.id}
                      label={role.label}
                      value={role.value}
                    />
                  ))}
                </Picker>
              </View>

              {/* Sous-titre et Picker pour sélectionner un username */}
              <Text style={styles.filterSubTitle}>Select a Username</Text>
              <View style={styles.pickerWithBorder}>
                <Picker
                  selectedValue={filterType}
                  onValueChange={(itemValue) => setFilterType(itemValue)}
                  style={styles.pickerText}
                >
                  <Picker.Item label="Select user name" value="" />
                  {usersnamesOptions.map((username) => (
                    <Picker.Item
                      key={username.id}
                      label={username.label}
                      value={username.value}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            {/* Bouton pour appliquer le filtre */}
            <TouchableOpacity
              onPress={() => {
                console.log("Filtre appliqué :", filterType);
                toggleModal();
              }}
            >
              <LinearGradient
                colors={["#242155", "#262D60", "#44C7F1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.applyButton}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Intégration du tableau sous l'histogramme */}
      <UserList users={usersData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  appBarContainer: {
    height: 80,
    justifyContent: "center",
    paddingLeft: 25,
    backgroundColor: "#336699",
    zIndex: 999,
  },
  titleContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#336699",
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  // prémier filrage des companies
  pickerContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  pickerText: {
    fontSize: 12,
    textAlign: "center",
    color: "#848A9C",
  },
  pickerWithBorder: {
    borderWidth: 1,
    borderColor: "#D0D0D0", // Couleur de la bordure
    borderRadius: 10,
    backgroundColor: "#FFFFFF", // Fond blanc
    paddingHorizontal: 3, // Espacement intérieur
    marginVertical: 10, // Espacement vertical
    height: 40, // Hauteur globale
    justifyContent: "center", // Centrer le contenu
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#848A9C",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "left",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 14,
    width: "80%",
  },
  filterButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#C9C9C9",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    height: 40,
    width: "15%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    marginTop: 50, // Espacement entre l'AppBar et les champs de filtrage
  },
  filterSubTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#848A9C",
    marginBottom: 5, // Espacement sous le sous-titre
    marginLeft: 10, // Espacement sur le côté gauche
  },
  modalAppBarTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    height: 320,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  modalAppBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#336699",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 346, // Ajustement pour la largeur du conteneur
    height: 50,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },

  applyButton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 40,
  },
  applyButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
