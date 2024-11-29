import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ValuesList = ({ values }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Values List</Text>

        {/* Conteneur général avec défilement horizontal */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View>
            {/* Titres des champs */}
            <View style={styles.headerRow}>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Value Name</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Category</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Folder</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>AFreq</Text>
              </View>
            </View>

            {/* Liste des valeurs avec défilement vertical */}
            <ScrollView style={styles.listContainer} nestedScrollEnabled={true}>
              {values.map((value) => (
                <View key={value.id} style={styles.valueRow}>
                  <View style={styles.column}>
                    <Text style={styles.valueName}>{value.valueName}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.category}>{value.category}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.folder}>{value.folder}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.afreq}>{value.afreq}</Text>
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
    backgroundColor: '#ffffff',
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
    minWidth: 100,
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
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5, // Ajout d'un peu de padding pour un meilleur espacement vertical
  },
  column: {
    width: 120, // Largeur fixe
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueName: {
    fontSize: 13,
    color: '#565656',
    alignSelf: 'center',
    width: '80%', // Centre le texte verticalement
  },
  category: {
    fontSize: 13,
    color: '#565656',
    alignSelf: 'center',
    width: '100%', // Centre le texte verticalement
  },
  folder: {
    fontSize: 13,
    color: '#565656',
    alignSelf: 'center',
    width: '115%', // Centre le texte verticalement
  },
  afreq: {
    fontSize: 13,
    color: '#565656',
    alignSelf: 'center',
    width: '145%', // Centre le texte verticalement
  },
});

export default ValuesList;
