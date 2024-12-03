import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const UserList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1); // Page active
  const usersPerPage = 10; // Nombre maximum d'utilisateurs par page

  // Calcul des indices pour découper les utilisateurs
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); // Utilisateurs de la page active

  // Gestion des pages
  const totalPages = Math.ceil(users.length / usersPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Liste des numéros de page

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>User List</Text>

        {/* Conteneur général avec défilement horizontal */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View>
            {/* Titres des champs */}
            <View style={styles.headerRow}>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>UserName</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Role</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Joining Date</Text>
              </View>
              <View style={styles.columnHeader}>
                <Text style={styles.headerText}>Email</Text>
              </View>
            </View>

            {/* Liste des utilisateurs avec défilement vertical */}
            <ScrollView style={styles.listContainer} nestedScrollEnabled={true}>
              {currentUsers.map((user) => (
                <View key={user.id} style={styles.userRow}>
                  <View style={styles.column}>
                    <View style={styles.userWithImage}>
                      <Image source={user.profileImage} style={styles.profileImage} />
                      <Text style={styles.userText}>{user.username}</Text>
                    </View>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.userText}>{user.role}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={[styles.userText, styles.joiningDateText]}>{user.joiningDate}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={[styles.userText, styles.emailText]}>{user.email}</Text>
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
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 3, // Ajout d'un peu de padding pour un meilleur espacement vertical
  },
  userWithImage: {
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
  userText: {
    fontSize: 13,
    color: '#565656',
    alignSelf: 'center',
    width: '80%', // Centre le texte verticalement
  },
  joiningDateText: {
    fontSize: 12, // Taille de police spécifique
    color: '#555555', // Couleur personnalisée pour la date
    alignSelfl: 'center', // Centrage horizontal
    width: '140%', // Espacement vertical
  },
  emailText: {
    fontSize: 12, // Taille de police spécifique
    color: '#555555', // Couleur personnalisée pour l'email
    alignSelf: 'center', // Alignement à gauche
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

export default UserList;
