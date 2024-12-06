import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function EditPassword({ navigation }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleOldPasswordVisibility = () => setShowOldPassword(!showOldPassword);
  const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    // Ajoutez cette fonction ici
    const handleApply = () => {
      console.log('Apply button pressed');
      // Logique pour appliquer les changements de mot de passe
      // Redirection vers la screen "Login"
      navigation.navigate('Login');
    };

  return (
    <View style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Titre de la page */}
      <Text style={styles.pageTitle}>Change Password</Text>

      {/* Champs de saisie du mot de passe */}
      <View style={styles.inputContainer}>
        {/* Champ Old Password */}
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="#242155" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Old Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!showOldPassword}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <TouchableOpacity onPress={toggleOldPasswordVisibility}>
            <Icon
              name={showOldPassword ? 'eye' : 'eye-slash'}
              size={20}
              color={showOldPassword ? '#336699' : '#ACA7A7'}
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Champ New Password */}
        <View style={[styles.inputWrapper, { marginTop: 10 }]}>
          <Icon name="lock" size={20} color="#242155" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity onPress={toggleNewPasswordVisibility}>
            <Icon
              name={showNewPassword ? 'eye' : 'eye-slash'}
              size={20}
              color={showNewPassword ? '#336699' : '#ACA7A7'}
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Champ Confirm Password */}
        <View style={[styles.inputWrapper, { marginTop: 10 }]}>
          <Icon name="lock" size={20} color="#242155" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
            <Icon
              name={showConfirmPassword ? 'eye' : 'eye-slash'}
              size={20}
              color={showConfirmPassword ? '#336699' : '#ACA7A7'}
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Button Apply */}
        <TouchableOpacity onPress={handleApply} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#242155', '#262D60', '#44C7F1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.ApplyButton}
          >
            <Text style={styles.ApplyText}>Apply</Text>
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
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#336699',
    textAlign: 'center',
    marginTop: 50,
  },
  inputContainer: {
    marginTop: 70,
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    borderColor: '#BDB7B7',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 40,
  },
  icon: {
    paddingHorizontal: 10,
  },
  visibilityIcon: {
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 350,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  ApplyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ApplyText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
