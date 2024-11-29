import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const UserList = ({ users }) => {
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
  {users.map((user) => (
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
        {/* Style spécifique pour la date d'ajout */}
        <Text style={[styles.userText, styles.joiningDateText]}>{user.joiningDate}</Text>
      </View>
      <View style={styles.column}>
        {/* Style spécifique pour l'email */}
        <Text style={[styles.userText, styles.emailText]}>{user.email}</Text>
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
});

export default UserList;
