import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const CompaniesList = ({ companies }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Companies List</Text>

        {/* Conteneur général avec défilement horizontal */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View>
            {/* Titres des champs */}
            <View style={styles.headerRow}>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Company</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Folders Created</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Tokens Spent</Text>
              </View>
            </View>

            {/* Liste des entreprises avec défilement vertical */}
            <ScrollView style={styles.listContainer} nestedScrollEnabled={true}>
  {companies.map((company) => (
    <View key={company.id} style={styles.companyRow}>
      <View style={styles.column}>
        <View style={styles.companyWithImage}>
          <Image source={company.profileImage} style={styles.profileImage} />
          <Text style={styles.companyText}>{company.name}</Text>
        </View>
      </View>
      <View style={styles.column}>
        <Text style={styles.foldersCreatedText}>{company.foldersCreated}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.tokensSpentText}>{company.tokensSpent}</Text>
      </View>
    </View>
  ))}
</ScrollView>

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#85A8CC',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    marginBottom: 10,
    paddingBottom: 5,
  },
  columnHeader: {
    minWidth: 120,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9DB0CE',
  },
  listContainer: {
    maxHeight: 200, // Limite la hauteur de la liste pour activer le défilement vertical
  },
  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 3, // Ajout d'un peu de padding pour un meilleur espacement vertical
  },
  companyWithImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alignement au début
    width: '100%', // Prendre toute la largeur
  },
  column: {
    width: 120, // Largeur fixe
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10, // Espace fixe avec le texte
  },
  companyText: {
    fontSize: 13,
    color: '#565656',
    alignSelf: 'center',
    width: '80%', // Centre le texte verticalement
  },
  foldersCreatedText: {
    fontSize: 13, // Taille personnalisée
    color: '#4A4A4A', // Couleur spécifique
    alignSelf: 'center', // Centré horizontalement
    width: '80%', // Centre le texte verticalement
  },
  tokensSpentText: {
    fontSize: 13, // Taille personnalisée
    color: '#4A4A4A', // Couleur spécifique
    alignSelf: 'center', // Centré horizontalement
    width: '65%', // Centre le texte verticalement
  },
 
  
});

export default CompaniesList;
