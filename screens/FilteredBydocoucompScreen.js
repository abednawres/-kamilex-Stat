import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import MyCurveValues from '../components/MyCurveValues';
import ValuesList from '../components/ValuesList';

export default function FilteredBydocoucompScreen({ navigation }) {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterType, setFilterType] = useState('');

  // Exemple de données pour les sociétés
  const companiesData = [
    { id: 1, title: "NOVATION CITY" },
    { id: 2, title: "PROXYM" },
    { id: 3, title: "ENOVA ROBOTICS" },
  ];
  
  // Liste des statuts pour le filtrage
  const categoriesOptions = [
    { id: 1, label: "Category A", value: "category a" },
    { id: 2, label: "Category B", value: "category b" },
    { id: 3, label: "Category C", value: "category c" },
  ];
  const values = [
    { id: 1, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 2, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 3, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 4, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 5, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 6, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 7, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 8, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 9, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 10, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },

// 2 ème page 

    { id: 1, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 2, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 3, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 4, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 5, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 6, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 7, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 8, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
    { id: 9, valueName: 'Value A', category: 'Category 1', folder: 'Folder X', afreq: '3' },
    { id: 10, valueName: 'Value B', category: 'Category 2', folder: 'Folder Y', afreq: '5' },
  ];


  // Gérer l'ouverture et la fermeture du modal
  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <ScrollView style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBarContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Titre de la page */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Value Management: Companies, Documents, or Both
        </Text>
        <Image
          source={require('../assets/values.png')} // Vérifie le chemin de l'image
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
            <Picker.Item key={company.id} label={company.title} value={company.title} />
          ))}
        </Picker>
      </View>

      {/* Premier Sous-titre */}
      <Text style={styles.subTitle}>
      Please observe the change in the number of unretrieved values over time:
      </Text>

      {/* Intégration du composant MyCurveValues */}
      <MyCurveValues />


      {/* Deuxième Sous-titre */}
      <Text style={styles.subTitle}>
      Please review the list of values that did not appear :
      </Text>

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
      {/* AppBar pour le modal */}
      <View style={styles.modalAppBar}>
        <Text style={styles.modalAppBarTitle}>Filter</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Icon name="close" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Ajout d'un espace entre l'AppBar et le titre */}
      <Text style={styles.modalSubtitle}>Filter by Category</Text>

      {/* Picker pour sélectionner un statut avec bordure */}
      <View style={styles.pickerWithBorder}>
        <Picker
          selectedValue={filterType}
          onValueChange={(itemValue) => setFilterType(itemValue)}
          style={styles.pickerText}
        >
          <Picker.Item label="Select category" value="" />
          {categoriesOptions.map((categories) => (
            <Picker.Item key={categories.id} label={categories.label} value={categories.value} />
          ))}
        </Picker>
      </View>

      {/* Bouton pour appliquer le filtre */}
      <TouchableOpacity
        onPress={() => {
          console.log("Filtre appliqué :", filterType); // Remplace cette ligne par ta logique
          toggleModal();
        }}
      >
        <LinearGradient
          colors={['#242155', '#262D60', '#44C7F1']}
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
      <ValuesList values={values} />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  appBarContainer: {
    height: 80,
    justifyContent: 'center',
    paddingLeft: 25,
    backgroundColor: '#336699',
    zIndex: 999,
  },
  titleContainer: {
    marginTop: 30,
    alignItems: 'center', // Centre le titre et l'image
    flexDirection: 'column', // Dispose les éléments verticalement
  },
  title: {
    fontSize: 28,
    color: '#336699',
    marginBottom: 20,
    textAlign: 'center', // Centre le texte
  },

  userImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  // prémier filrage des companies
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  pickerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#848A9C',
  },
  pickerWithBorder: {
    borderWidth: 1,
    borderColor: '#D0D0D0', // Couleur de la bordure
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Fond blanc
    paddingHorizontal: 3, // Espacement intérieur
    marginVertical: 10, // Espacement vertical
    height: 40, // Hauteur globale
    justifyContent: 'center', // Centrer le contenu
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#848A9C',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'left',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 14,
    width: '80%',
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#C9C9C9',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    height: 40,
    width: '15%',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalAppBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#336699',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 308, // Ajustement pour la largeur du conteneur
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  modalAppBarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#848A9C',
    textAlign: 'left',
    marginTop: 50, // Ajout d'un espace pour éviter le chevauchement avec l'AppBar
    marginBottom: 20,
  },
  
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  
 
  applyButton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height:40,
  },
  applyButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
