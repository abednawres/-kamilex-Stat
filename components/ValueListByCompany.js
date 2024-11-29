import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ValueListByCompany = ({ values }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Values List by Company</Text>

        {/* Conteneur général avec défilement horizontal */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View>
            {/* Titres des champs */}
            <View style={styles.headerRow}>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Value Name</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Folder Name</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Folder ID</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Lot Name</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Lot ID</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Document Name</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Operation Type</Text>
              </View>
            </View>

            {/* Liste des valeurs avec défilement vertical */}
            <ScrollView style={styles.listContainer} nestedScrollEnabled={true}>
              {values.map((value) => (
                <View key={value.id} style={styles.valueRow}>
                  <View style={styles.column}>
                    <Text style={styles.text}>{value.valueName}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.text}>{value.folderName}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.text}>{value.folderID}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.text}>{value.lotName}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.text}>{value.lotID}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.text}>{value.documentName}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.text}>{value.operationType}</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginVertical: 20,
    alignSelf: 'center',
    width: '95%',
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
    maxHeight: 200, // Hauteur ajustée pour activer le défilement vertical
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
  },
  column: {
    minWidth: 120, // Largeur fixe par colonne
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    color: '#565656',
  },
});

export default ValueListByCompany;
