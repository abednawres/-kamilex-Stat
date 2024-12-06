import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PrivacyPolicy({ navigation }) {
  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Privacy Policy</Text>
      </View>

      {/* Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.pageTitle}>Privacy and Policy</Text>
      </View>
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
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
