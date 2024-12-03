import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const CompaniesList = ({ companies }) => {
  const [currentPage, setCurrentPage] = useState(1); // Page active
  const companiesPerPage = 10; // Nombre maximum de companies par page

  // Calcul des indices pour découper les companies
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany); // Companies de la page active

  // Gestion des pages
  const totalPages = Math.ceil(companies.length / companiesPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Liste des numéros de page

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
              {currentCompanies.map((company) => (
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
                currentPage === page && styles.activePageNumber, // Carré stylé pour la page active
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
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

export default CompaniesList;
