import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import MyCurveValues from '../components/MyCurveValues';
import ValuesList from '../components/ValuesList';

export default function FilteredBydocoucompScreen({ navigation }) {
  const [selectedCompany, setSelectedCompany] = useState('');

  // Exemple de données pour les sociétés
  const companiesData = [
    { id: 1, title: "NOVATION CITY" },
    { id: 2, title: "PROXYM" },
    { id: 3, title: "ENOVA ROBOTICS" },
    // Ajoutez d'autres sociétés si nécessaire
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
  ];
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* AppBar */}
      <View style={styles.appBarContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Contenu principal */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Value Management: Companies, Documents, or Both
        </Text>

        {/* Image centrée */}
        <Image 
          source={require('../assets/values.png')} // Assurez-vous que le chemin est correct
          style={styles.userImage} 
        />

        {/* Picker de filtrage d'entreprise */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCompany}
            onValueChange={(itemValue) => setSelectedCompany(itemValue)}
            style={styles.pickerText} // Appliquer le style de texte centré
          >
            <Picker.Item label="Select a company" value="" />
            {companiesData.map((company) => (
              <Picker.Item key={company.id} label={company.title} value={company.title} />
            ))}
          </Picker>
        </View>

        {/* Sous-titre aligné à gauche */}
        <Text style={styles.subTitle}>
          Please observe the change in the number of unretrieved values over time:
        </Text>
      </View>

      {/* Intégration du composant MyCurveValues */}
      <MyCurveValues />

      {/* Deuxième sous-titre sous MyCurveValues */}
      <Text style={styles.secondSubTitle}>
      Please review the list of values that did not appear :
      </Text>
       {/* Intégration du tableau sous l'histogramme */}
       <ValuesList values={values} />
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
    resizeMode: 'contain',
    marginBottom: 20, // Espacement entre l'image et le sous-titre
  },
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
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#848A9C',
    marginTop: 20,
    textAlign: 'left',
    alignSelf: 'flex-start', // Aligner le texte à gauche
    marginHorizontal: 25,
    marginVertical: 20, // Espacement vertical
  },
  secondSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#848A9C',
    marginTop: 20,
    textAlign: 'left',
    alignSelf: 'flex-start', // Aligner le texte à gauche
    marginHorizontal: 25,
    marginVertical: 20, // Espacement vertical
  },
});
