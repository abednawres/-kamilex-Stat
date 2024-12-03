import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ValueListByCompany = ({ values }) => {
  const [currentPage, setCurrentPage] = useState(1); // Page active
  const valuesPerPage = 10; // Nombre maximum de valeurs par page

  // Calcul des indices pour découper les valeurs
  const indexOfLastValue = currentPage * valuesPerPage;
  const indexOfFirstValue = indexOfLastValue - valuesPerPage;
  const currentValues = values.slice(indexOfFirstValue, indexOfLastValue); // Valeurs de la page active

  // Gestion des pages
  const totalPages = Math.ceil(values.length / valuesPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Liste des numéros de page

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
              {currentValues.map((value) => (
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

        {/* Pagination */}
        <View style={styles.pagination}>
          <TouchableOpacity
            style={styles.pageArrow}
            disabled={currentPage === 1}
            onPress={() => handlePageChange(currentPage - 1)}
          >
            <Text style={styles.pageArrowText}>{'<'}</Text>
          </TouchableOpacity>
          {pages.map((page) => (
            <TouchableOpacity
              key={page}
              style={[
                styles.pageNumber,
                currentPage === page && styles.activePageNumber,
              ]}
              onPress={() => handlePageChange(page)}
            >
              <Text
                style={currentPage === page ? styles.activePageText : styles.inactivePageText}
              >
                {page}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.pageArrow}
            disabled={currentPage === totalPages}
            onPress={() => handlePageChange(currentPage + 1)}
          >
            <Text style={styles.pageArrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Les styles sont similaires à ceux de UserList
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
    maxHeight: 200,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
  },
  column: {
    minWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    color: '#565656',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  pageArrow: {
    padding: 5,
    marginHorizontal: 10,
  },
  pageArrowText: {
    fontSize: 18,
    color: '#9DB0CE',
  },
  pageNumber: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9DB0CE',
  },
  activePageNumber: {
    backgroundColor: '#85A8CC',
    borderColor: '#85A8CC',
  },
  inactivePageText: {
    fontSize: 14,
    color: '#555',
  },
  activePageText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ValueListByCompany;
