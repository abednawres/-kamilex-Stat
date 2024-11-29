import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import CompaniesCard from '../components/CompaniesCard'; 
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function Companies({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [alphabeticalOrder, setAlphabeticalOrder] = useState('A'); // Lettre sélectionnée
    const [fieldOfActivity, setFieldOfActivity] = useState(''); // Secteur d'activité
    const [searchText, setSearchText] = useState('');

    const applyFilter = () => {
        console.log('Filtre appliqué:', alphabeticalOrder, fieldOfActivity);
        setModalVisible(false);
    };
    
    const companiesData = [
        { id: 1, title: "NOVATION CITY", value: "Software company in Tunisia", description: "4.9 (37 Reviews)", imageSource: require('../assets/logo1.png') },
        { id: 2, title: "PROXYM", value: "Software company in Tunisia", description: "4.9 (37 Reviews)", imageSource: require('../assets/logo2.png') },
        { id: 3, title: "ENOVA ROBOTICS", value: "Software company in Tunisia", description: "4.9 (37 Reviews)", imageSource: require('../assets/logo3.png') },
        { id: 4, title: "ENOVA ROBOTICS", value: "Software company in Tunisia", description: "4.9 (37 Reviews)", imageSource: require('../assets/logo3.png') },
    ];
    
    // Filtrer les entreprises en fonction de la lettre sélectionnée et du secteur d'activité
    const filteredCompanies = companiesData.filter(company => {
        const matchesAlphabet = company.title.toLowerCase().startsWith(alphabeticalOrder.toLowerCase());
        const matchesActivity = company.value.toLowerCase().includes(fieldOfActivity.toLowerCase());
        return matchesAlphabet && matchesActivity;
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.appBarContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={18} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>List of Companies</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="search..."
                    placeholderTextColor="#C9C9C9"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
                <TouchableOpacity
                    style={styles.filterContainer}
                    onPress={() => setModalVisible(true)}
                >
                    <Icon name="sort" size={24} color="#CCCCCC" />
                </TouchableOpacity>
            </View>

            <Text style={styles.seeAllText}>See All</Text>

            <View style={styles.cardsContainer}>
                {(filteredCompanies.length > 0 ? filteredCompanies : companiesData).map((company) => (
                    <CompaniesCard
                        key={company.id}
                        title={company.title}
                        value={company.value}
                        description={company.description}
                        imageSource={company.imageSource}
                        onPress={() => navigation.navigate('CompanyDetails', { companyId: company.id, companyData: companiesData })}
                    />
                ))}
            </View>
                                       
            {/* Modal pour les options de filtrage */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {/* AppBar dans le modal */}
                        <View style={styles.modalAppBar}>
                            <Text style={styles.modalAppBarTitle}>Filter Options</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Icon name="times" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Picker pour l'ordre alphabétique */}
                        <Text style={styles.filterSubTitle}>filter alphabetically</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={alphabeticalOrder}
                                onValueChange={(itemValue) => setAlphabeticalOrder(itemValue)}
                                style={styles.picker}
                            >
                                {[...Array(26)].map((_, index) => {
                                    const letter = String.fromCharCode(65 + index); // Convertir l'index en lettre (A=65)
                                    return (
                                        <Picker.Item key={letter} label={letter} value={letter} />
                                    );
                                })}
                            </Picker>
                        </View>

                      

                        {/* Picker pour le secteur d'activité */}
                        <Text style={styles.filterSubTitle}>filter by industry</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={fieldOfActivity}
                                onValueChange={(itemValue) => setFieldOfActivity(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Software" value="Software" />
                                <Picker.Item label="Robotics" value="Robotics" />
                                <Picker.Item label="Healthcare" value="Healthcare" />
                                <Picker.Item label="Finance" value="Finance" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>
                        </View>

                        {/* Bouton pour appliquer le filtre */}
                        <TouchableOpacity onPress={applyFilter}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FAFAFA',
        paddingBottom: 20,
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: '#336699',
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: '5%',
    },
    searchInput: {
        height: 45,
        width: '80%',
        borderColor: '#C9C9C9',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    filterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C9C9C9',
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        width: '18%',
        backgroundColor: '#FFFFFF',
    },
    seeAllText: {
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 310,
        fontSize: 16,
        color: '#7D7878',
    },
    cardsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    
    // Styles pour le modal
    modalContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // Fond semi-transparent
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 100, // Ombre sur Android
        shadowColor: '#000000', // Ombre sur iOS
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingHorizontal: 15,
        paddingTop: 70, // Ajoutez de l'espace en haut pour éviter que le contenu ne soit collé à l'AppBar
    },
    
    modalAppBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#336699',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: 346,
        height:50, // Utilisez 100% de la largeur du modal pour plus de flexibilité
        position: 'absolute', // Fixe l'AppBar en haut du modal
        top: 0,
        left: 0,
        zIndex: 10, // Assurez-vous que l'AppBar soit toujours au-dessus du contenu
    },
    
    modalAppBarTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    filterSubTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#848A9C',
        marginBottom: 5, // Espacement sous le sous-titre
        marginLeft: 10,  // Espacement sur le côté gauche
      },
    pickerContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D0D0D0',
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        justifyContent: 'center',
        marginVertical: 10,
        width: '100%',
        alignSelf: 'center', // aligner le contenue du chmaps du  filtrage au center
      },
    pickerText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#848A9C',
      },
    applyButton: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:20,
    },
    applyButtonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
});