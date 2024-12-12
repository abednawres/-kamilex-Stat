import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PrivacyPolicy({ navigation }) {
  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Contenu principal avec défilement vertical */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Titre de la page */}
        <Text style={styles.pageTitle}>Privacy Policy</Text>

        {/* Premier sous-titre et texte */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>1.Types data we collect</Text>
          <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </Text>
        </View>

        {/* Deuxième sous-titre et texte */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>2.Use of your personal data</Text>
          <Text style={styles.sectionText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </Text>
        </View>

        {/* Troisième sous-titre et texte */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>3. Disclosure of your personal data</Text>
          <Text style={styles.sectionText}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 


          </Text>
        </View>
      </ScrollView>
    </View>
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
    marginBottom: 50,
    marginTop:40,
   
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9DB0CE',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});
