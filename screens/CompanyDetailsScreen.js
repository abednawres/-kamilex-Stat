import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import FolderList from '../components/Folderlist';
import FolderHistogram from '../components/FolderHistogram';
import PieChartCard from '../components/PieChartCard';

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
       showsHorizontalScrollIndicator={false}contentContainerStyle={styles.cardScrollContainer}
>        
         <PieChartCard>Number of folders</PieChartCard>
         <PieChartCard>Number of Tokens</PieChartCard>
         <PieChartCard>Number of users</PieChartCard>
          
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
                        <Text style={styles.modalTitle}>Filter by Status</Text>

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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '90%',
    },
    modalTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color:"#A1B9DE",
      },
     
      pickerWithBorder: {
        borderWidth: 1,
        borderColor: '#D0D0D0', // Couleur de la bordure
        borderRadius: 10,
        backgroundColor: '#FFFFFF', // Fond blanc
        paddingHorizontal: 3, // Espacement intérieur
        marginVertical: 10, // Espacement vertical
        height: 50, // Hauteur globale
        justifyContent: 'center', // Centrer le contenu
      },
    pickerText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#848A9C',
      },
    applyButton: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height:50,
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
