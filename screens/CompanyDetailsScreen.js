import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import FolderList from '../components/Folderlist';
import FolderHistogram from '../components/FolderHistogram';
import PieChartCard from '../components/PieChartCard'; // Assurez-vous que le chemin est correct

const CompanyDetails = ({ route, navigation }) => {
    const { companyId, companyData } = route.params;

    // Trouver les détails de l'entreprise sélectionnée
    const selectedCompany = companyData.find((company) => company.id === companyId);

    if (!selectedCompany) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Company not found!</Text>
            </View>
        );
    }
    
    const [selectedCompanyFilter, setSelectedCompanyFilter] = useState('');
    const [searchText, setSearchText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [filterType, setFilterType] = useState('');

    
    
    // Liste des statuts pour le filtrage
    const statusOptions = [
        { id: 1, label: "In progress", value: "in_progress" },
        { id: 2, label: "Done", value: "done" },
        { id: 3, label: "To do", value: "to_do" },
    ];

    const FolderData = [
        { id: 1, FolderID: "#123", Classification: "In Progress", TokenSpent: "18" },
        { id: 2, FolderID: "#875", Classification: "Done", TokenSpent: "25" },
        { id: 3, FolderID: "#857", Classification: "To Do", TokenSpent: "50" },
        { id: 4, FolderID: "#302", Classification: "In Progress", TokenSpent: "50" },
        { id: 5, FolderID: "#105", Classification: "Done", TokenSpent: "20" },
        { id: 6, FolderID: "#105", Classification: "Done", TokenSpent: "20" },
        { id: 7, FolderID: "#857", Classification: "To Do", TokenSpent: "50" },
        { id: 8, FolderID: "#302", Classification: "In Progress", TokenSpent: "50" },
        { id: 9, FolderID: "#105", Classification: "Done", TokenSpent: "20" },
        { id: 10, FolderID: "#105", Classification: "Done", TokenSpent: "20" },

       // 2 ème page 
        { id: 1, FolderID: "#123", Classification: "In Progress", TokenSpent: "18" },
        { id: 2, FolderID: "#875", Classification: "Done", TokenSpent: "25" },
        { id: 3, FolderID: "#857", Classification: "To Do", TokenSpent: "50" },
        { id: 4, FolderID: "#302", Classification: "In Progress", TokenSpent: "50" },
        { id: 5, FolderID: "#105", Classification: "Done", TokenSpent: "20" },
        { id: 6, FolderID: "#105", Classification: "Done", TokenSpent: "20" },
        { id: 7, FolderID: "#857", Classification: "To Do", TokenSpent: "50" },
        { id: 8, FolderID: "#302", Classification: "In Progress", TokenSpent: "50" },
        { id: 9, FolderID: "#105", Classification: "Done", TokenSpent: "20" },
        { id: 10, FolderID: "#105", Classification: "Done", TokenSpent: "20" },
    ];
     
    // Gérer l'ouverture et la fermeture du modal
    const toggleModal = () => setModalVisible(!modalVisible);
    
    // Données pour les pie charts
    const pieChartData = [
        { title: "Number of folders", data: [{ value: 85, color: '#B8D8E3' }, { value: 15, color: '#E9EBF3' }], titleColor: '#B8D8E3' },
        { title: "Number of Tokens", data: [{ value: 47, color: '#7EA093' }, { value: 53, color: '#E9EBF3' }], titleColor: '#7EA093' },
        { title: "Number of users", data: [{ value: 68, color: '#A1B9DE' }, { value: 32, color: '#E9EBF3' }], titleColor: '#A1B9DE' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* AppBar */}
            <View style={styles.appBarContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={20} color="white" />
                </TouchableOpacity>
            </View>
            
            {/* Image et titre */}
            <View style={styles.header}>
                <Image source={selectedCompany.imageSource} style={styles.companyImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.companyTitle}>{selectedCompany.title}</Text>
                    <Text style={styles.companyValue}>{selectedCompany.value}</Text>
                </View>
            </View>
            <ScrollView 
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={styles.cardScrollContainer}
>        
         {pieChartData.map((item, index) => (
           <PieChartCard key={index} title={item.title} data={item.data} titleColor={item.titleColor} />
         ))}
          
          </ScrollView>
            
            <Text style={styles.subTitle}>
                Please review the evolution of the number of folders:
            </Text>

            {/* Ajouter FolderHistogram avec une taille limitée */}
            <View style={styles.histogramContainer}>
                <FolderHistogram />
            </View>

            {/* Nouveau sous-titre après FolderHistogram */}
            <Text style={styles.SecondsubTitle}>
                Please see the list of created Folders:
            </Text>

          

            {/* Champ de Recherche */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search..."
                />
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
      <Text style={styles.modalSubtitle}>Filter by Status</Text>

      {/* Picker pour sélectionner un statut avec bordure */}
      <View style={styles.pickerWithBorder}>
        <Picker
          selectedValue={filterType}
          onValueChange={(itemValue) => setFilterType(itemValue)}
          style={styles.pickerText}
        >
          <Picker.Item label="Select Status" value="" />
          {statusOptions.map((status) => (
            <Picker.Item key={status.id} label={status.label} value={status.value} />
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

            {/* Liste des dossiers */}
            <FolderList folders={FolderData} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
    },
    cardScrollContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    appBarContainer: {
        height: 80,
        width: "100%",
        justifyContent: 'center',
        paddingLeft: 30,
        paddingTop: 20,
        backgroundColor: '#336699',
        zIndex: 999,
    },
  
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        padding: 20,
    },
    companyImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: '#336699',
        borderWidth: 2,
    },
    textContainer: {
        marginLeft: 20,
    },
    companyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#336699',
    },
    companyValue: {
        fontSize: 16,
        color: '#565656',
        marginTop: 5,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#848A9C',
        marginHorizontal:20,
        marginTop: 15,
        marginBottom: 10,
    },
    SecondsubTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#848A9C',
        marginHorizontal:2,
        marginTop: 20,
        marginRight:40,
        marginBottom: 10,
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
    histogramContainer: {
        height: 300,
        width: '100%',
        marginVertical: 15,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
    },
});

export default CompanyDetails;