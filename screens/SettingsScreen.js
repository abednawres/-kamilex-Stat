import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Settings({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>
      {/* Titre de la page */}
      <Text style={styles.pageTitle}>Settings</Text>
      {/* Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.text}>Review and adjust your account settings</Text>
        {/* Champ de recherche */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#C9C9C9"
        />
        {/* Sections avec icônes et flèches */}
        <TouchableOpacity
  style={styles.section}
  onPress={() => navigation.navigate('EditProfile')}
>
  <View style={styles.sectionContent}>
    <Icon name="user" style={styles.icon} />
    <Text style={styles.sectionText}>Profile</Text>
    <Icon name="chevron-right" style={styles.arrowIcon} />
  </View>
</TouchableOpacity>
<View style={styles.divider} />
<TouchableOpacity
  style={styles.section}
  onPress={() => navigation.navigate('Notifications')}
>
  <View style={styles.sectionContent}>
    <Icon name="bell" style={styles.icon} />
    <Text style={styles.sectionText}>Notification</Text>
    <Icon name="chevron-right" style={styles.arrowIcon} />
  </View>
</TouchableOpacity>
<View style={styles.divider} />
<TouchableOpacity
  style={styles.section}
  onPress={() => navigation.navigate(' PrivacyPolicy')}
>
  <View style={styles.sectionContent}>
    <Icon name="shield" style={styles.icon} />
    <Text style={styles.sectionText}>Privacy and Policy</Text>
    <Icon name="chevron-right" style={styles.arrowIcon} />
  </View>
</TouchableOpacity>
<View style={styles.divider} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  appBar: {
    height: 80,
    backgroundColor: '#336699',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#336699',
    textAlign: 'center',
    marginTop: 50,
  },
  content: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#848A9C',
    marginTop: 10,
  },
  searchInput: {
    height: 45,
    width: '100%',
    borderColor: '#C9C9C9',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  icon: {
    fontSize: 20, // Taille uniforme pour toutes les icônes
    color: '#000000',
    width: 25, // Largeur constante pour garantir un alignement uniforme
    textAlign: 'center', // Aligne verticalement et horizontalement
  },
  arrowIcon: {
    fontSize: 20,
    color: '#C9C9C9',
  },
  sectionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espace entre le texte et la flèche
    alignItems: 'center', // Alignement vertical centré
    width: '100%',
  },
  sectionText: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 15, // Ajuste l'espace entre l'icône et le texte
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center', // Alignement vertical
    paddingVertical: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#C9C9C9',
    marginVertical: 10,
  },
});