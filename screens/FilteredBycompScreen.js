import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyCurveValues from '../components/MyCurveValues';
import ValueListByCompany from '../components/ValueListByCompany';

export default function FilteredByCompScreen({ navigation }) {
  const values = [
    
        {id: 1,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 2,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 3,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 4,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 5,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 6,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 7,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 8,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 9,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 10,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},

        // 2 ème page 
        {id: 1,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 2,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 3,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 4,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 5,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 6,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 7,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 8,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 9,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
        {id: 10,valueName: 'Value D',folderName: 'Folder W',folderID: '126',lotName: 'Lot 4',lotID: '459',documentName: 'Doc D',operationType: 'Type 4'},
      
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
        <Text style={styles.title}>Value Management By Companies</Text>

        {/* Image centrée */}
        <Image
          source={require('../assets/values.png')} // Assurez-vous que le chemin est correct
          style={styles.userImage}
        />

        {/* Sous-titre aligné à gauche */}
        <Text style={styles.subTitle}>
          Please observe the change in the number of unretrieved values over time:
        </Text>
      </View>

      {/* Intégration du composant MyCurveValues */}
      <MyCurveValues />

      {/* Deuxième sous-titre sous MyCurveValues */}
      <Text style={styles.secondSubTitle}>
        Please review the list of values that did not appear:
      </Text>

      {/* Intégration du tableau sous l'histogramme */}
      <ValueListByCompany values={values} />
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
    fontSize: 28,
    color: '#336699',
    marginBottom: 20,
    textAlign: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#848A9C',
    marginTop: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginHorizontal: 25,
    marginVertical: 20,
  },
  secondSubTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#848A9C',
    marginTop: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginHorizontal: 25,
    marginVertical: 20,
  },
});
