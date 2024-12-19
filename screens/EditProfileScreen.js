import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient'; 



export default function EditProfile({ navigation }) {
  const [name, setName] = useState('John Doe'); // Nom de l'utilisateur
  const [email] = useState('john.doe@example.com'); // Email de l'utilisateur (non modifiable)
  const handleChangePassword = () => {
    
    navigation.navigate('EditPassword');
  };
  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>
    {/* Titre centré avec l'icône de paramètre */}
    <View style={styles.pageTitleContainer}>
  <Text style={styles.pageTitle}>Profile</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.settingsIcon}>
  <Icon name="cog" size={24} color="#336699" />
  
</TouchableOpacity>
   </View>
      {/* Content */}
      <View style={styles.content}>
        {/* Image de profil */}
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image 
            source={require('../assets/ali.jpg')} 
            style={styles.profileImage} 
          />
          <Icon name="camera" size={18} color="#FFFFFF" style={styles.cameraIcon} />
        </TouchableOpacity>
        {/* Nom et rôle */}
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userRole}>Administrator</Text>
        {/* Champs avec titres et icônes */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.inputFieldContainer}>
            <Icon name="user" size={20} color="#336699" style={styles.inputIcon} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputFieldContainer}>
            <Icon name="envelope" size={20} color="#336699" style={styles.inputIcon} />
            <TextInput
              style={styles.inputField}
              value={email}
              editable={false} // L'email est non modifiable
            />
          </View>
        </View>
        {/* Button Change Password */}
        <TouchableOpacity onPress={handleChangePassword} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#242155', '#262D60', '#44C7F1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.changePasswordButton}
          >
            <Text style={styles.changePasswordText}>Change Password</Text>
          </LinearGradient>
        </TouchableOpacity>
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
  pageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centrer le titre
    marginTop: 50,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#336699',
    textAlign: 'center',
  },
  settingsIcon: {
    position: 'absolute', // Position absolue pour ne pas affecter le titre centré
    right: 20, // Positionner à droite
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  profileImageContainer: {
    position: 'relative',
    width: 110,
    height: 110,
    borderRadius: 80,
    overflow: 'hidden',
    backgroundColor: '#C9C9C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 8,
    right: 3,
    backgroundColor: '#336699',
    padding: 10,
    borderRadius: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  userRole: {
    fontSize: 20,
    color: '#888',
    marginTop: 5,
  },
  inputGroup: {
    width: '90%',
    marginTop: 20,
  },
  // les titres de input ( username  et email  )
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8E8B8B',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C9C9C9',
    paddingHorizontal: 10,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  buttonContainer:{
    width: 350,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 50,
  },
  changePasswordButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePasswordText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});