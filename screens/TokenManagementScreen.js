import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import TokenHistogram from '../components/TokenHistogram';
import CompaniesList from '../components/CompaniesList';

export default function TokenManagement({ navigation }) {
  const [selectedCompany, setSelectedCompany] = useState('');

  // Exemple de données pour les sociétés
  const companiesData = [
    { id: 1, title: "NOVATION CITY" },
    { id: 2, title: "PROXYM" },
    { id: 3, title: "ENOVA ROBOTICS" },
    // Ajoutez d'autres sociétés si nécessaire
  ];
  const CompaniesData = [
    { id: 1, name: "Envast",foldersCreated: "123", tokensSpent: "4545",profileImage: require('../assets/Envast.png') },
    { id: 2, name: "Proxym", foldersCreated: "145", tokensSpent: "5265",profileImage: require('../assets/Proxym.png') },
    { id: 3, name: "Envast",foldersCreated: "456", tokensSpent: "4562",profileImage: require('../assets/Envast.png') },
    { id: 4, name: "Proxym", foldersCreated: "789", tokensSpent: "1023",profileImage: require('../assets/Proxym.png') },
    { id: 5, name: "Envast", foldersCreated: "723", tokensSpent: "1478",profileImage: require('../assets/Envast.png') },
    { id: 6, name: "Proxym", foldersCreated: "125", tokensSpent: "1000",profileImage: require('../assets/Proxym.png') },
    { id: 7, name: "Envast", foldersCreated: "230", tokensSpent: "2000",profileImage: require('../assets/Envast.png') },
    { id: 8, name: "Proxym", foldersCreated: "456", tokensSpent: "1458",profileImage: require('../assets/Proxym.png') },
    { id: 9, name: "Envast", foldersCreated: "123", tokensSpent: "7895",profileImage: require('../assets/Envast.png') },
    { id: 10,name: "Proxym", foldersCreated: "56", tokensSpent: "1236",profileImage: require('../assets/Proxym.png') },
// 2 ème page 
    { id: 1, name: "Envast",foldersCreated: "123", tokensSpent: "4545",profileImage: require('../assets/Envast.png') },
    { id: 2, name: "Proxym", foldersCreated: "145", tokensSpent: "5265",profileImage: require('../assets/Proxym.png') },
    { id: 3, name: "Envast",foldersCreated: "456", tokensSpent: "4562",profileImage: require('../assets/Envast.png') },
    { id: 4, name: "Proxym", foldersCreated: "789", tokensSpent: "1023",profileImage: require('../assets/Proxym.png') },
    { id: 5, name: "Envast", foldersCreated: "723", tokensSpent: "1478",profileImage: require('../assets/Envast.png') },
    { id: 6, name: "Proxym", foldersCreated: "125", tokensSpent: "1000",profileImage: require('../assets/Proxym.png') },
    { id: 7, name: "Envast", foldersCreated: "230", tokensSpent: "2000",profileImage: require('../assets/Envast.png') },
    { id: 8, name: "Proxym", foldersCreated: "456", tokensSpent: "1458",profileImage: require('../assets/Proxym.png') },
    { id: 9, name: "Envast", foldersCreated: "123", tokensSpent: "7895",profileImage: require('../assets/Envast.png') },
    { id: 10,name: "Proxym", foldersCreated: "56", tokensSpent: "1236",profileImage: require('../assets/Proxym.png') },

   
    
  ];

  return (
<ScrollView contentContainerStyle={styles.container}>
  <View style={styles.appBarContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={18} color="white" />
    </TouchableOpacity>
  </View>
  
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Token Management</Text>
    <Image 
      source={require('../assets/tokenspent.png')} 
      style={styles.userImage} 
    />
  </View>

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
  
  <Text style={styles.subTitle}>
    Please see the evolution of the number of tokens spent: 
  </Text>
  
  {/* Histogramme des tokens */}
  <TokenHistogram />

  <Text style={styles.subTitle}>
    Companies Overview:
  </Text>

  {/* Liste des entreprises */}
  <CompaniesList companies={CompaniesData} />
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
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    color: '#336699',
    marginBottom: 20,
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
    color: '#848A9C',        // Couleur légèrement grisée
    marginHorizontal: 20, // Espacement horizontal
    marginTop: 15, 
    marginBottom: 10,           // Espacement au-dessus
    textAlign: 'left',    // Aligner le texte à gauche
  },
});
