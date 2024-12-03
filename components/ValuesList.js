import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ValuesList = ({ values }) => {
  const [currentPage, setCurrentPage] = useState(1); // Page active
  const valuesPerPage = 10; // Number of values per page

  // Calculating the indices to slice the values
  const indexOfLastValue = currentPage * valuesPerPage;
  const indexOfFirstValue = indexOfLastValue - valuesPerPage;
  const currentValues = values.slice(indexOfFirstValue, indexOfLastValue); // Values for the current page

  // Pagination controls
  const totalPages = Math.ceil(values.length / valuesPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Values List</Text>

        {/* General container with horizontal scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View>
            {/* Column headers */}
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

            {/* List of values with vertical scroll */}
            <ScrollView style={styles.listContainer} nestedScrollEnabled={true}>
              {currentValues.map((value) => (
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
                currentPage === page && styles.activePageNumber, // Active page style
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

export default ValuesList;
