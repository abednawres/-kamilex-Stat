import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function ValuesManagement({ navigation }) {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedDocument, setSelectedDocument] = useState('');

    const companiesData = [
        { id: 1, title: "NOVATION CITY" },
        { id: 2, title: "PROXYM" },
        { id: 3, title: "ENOVA ROBOTICS" },
    ];

    const documentsData = [
        { id: 1, title: "Document A" },
        { id: 2, title: "Document B" },
        { id: 3, title: "Document C" },
    ];

    const handleNavigation = () => {
        if (selectedCompany && selectedDocument) {
            // Si les deux filtres sont sélectionnés, navigue vers l'écran "ValuesManagementdocoucompScreen"
            navigation.navigate('FilteredBydocoucomp', {
                company: selectedCompany,
                document: selectedDocument
            });
        } else if (selectedCompany) {
            // Si uniquement le filtre de la société est sélectionné
            navigation.navigate('FilteredBycomp', { company: selectedCompany });
        } else if (selectedDocument) {
            // Si uniquement le filtre du document est sélectionné
            navigation.navigate('FilteredBydocoucomp', { document: selectedDocument });
        } else {
            // Ajoute une action par défaut si aucun filtre n'est sélectionné (optionnel)
            alert('Please select a company or a document.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.appBarContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={18} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Values Management</Text>
            </View>

            <Text style={styles.instructionText}>
                Please select a company or a document to view your unretrieved values.
            </Text>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCompany}
                    onValueChange={(itemValue) => setSelectedCompany(itemValue)}
                >
                    <Picker.Item label="Select a company" value="" />
                    {companiesData.map((company) => (
                        <Picker.Item key={company.id} label={company.title} value={company.title} />
                    ))}
                </Picker>
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedDocument}
                    onValueChange={(itemValue) => setSelectedDocument(itemValue)}
                >
                    <Picker.Item label="Select a document" value="" />
                    {documentsData.map((document) => (
                        <Picker.Item key={document.id} label={document.title} value={document.title} />
                    ))}
                </Picker>
            </View>

            {/* Bouton pour appliquer les filtres et naviguer */}
            <TouchableOpacity style={styles.buttonInner} onPress={handleNavigation}>
    <LinearGradient
        colors={['#242155', '#262D60', '#44C7F1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientButton}
    >
        <Text style={styles.buttonText}>Apply Filters</Text>
    </LinearGradient>
          </TouchableOpacity>
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
    pickerContainer: {
        marginTop: 30,
        height: 50,
        width: '90%',
        borderColor: '#C9C9C9',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
    instructionText: {
        marginTop: 20,
        color: '#848A9C',
        fontSize: 18,
        marginLeft: 22,
    },
    buttonInner: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        overflow: 'hidden', // Assurez-vous que le dégradé reste dans les bordures du bouton
        alignSelf: 'center',
        marginTop: 30,
        
    },
    gradientButton: {
        flex: 1, // Pour occuper tout l'espace de buttonInner
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },


       
    
});
