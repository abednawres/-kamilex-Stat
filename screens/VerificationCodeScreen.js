import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Verificationcode({ navigation }) {
  const handleContinuePress = () => {
     // Naviguer vers l'écran de code de vérification
     navigation.navigate('Newpassword');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <View style={{ height: 90, justifyContent:'center', paddingLeft: 25, zIndex: 999}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <View style={[styles.appBarContainer, {marginTop: -90}]}>
        <Image
          source={require('../assets/Images/Image1.png')}
          style={styles.appBar}
          resizeMode="cover"
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enter your verification code</Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>We Have sent the verification to your e-mail</Text>
      </View>

      <View style={styles.inputContainer}>
        {/* Champs de saisie pour le code de vérification */}
        <View style={styles.rowContainer}>
          {[...Array(5)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.inputSmall}
              placeholder=""
              placeholderTextColor="#A9A9A9"
              keyboardType="numeric" // Pour les codes
            />
          ))}
        </View>

        {/* Bouton Continue */}
        <TouchableOpacity onPress={handleContinuePress} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#242155', '#262D60', '#44C7F1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.loginButton}
          >
            <Text style={[styles.loginButtonText, { fontWeight: 'bold' }]}>CONTINUE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
   );
}

const styles = StyleSheet.create({
   container:{
       flexGrow :1 ,
       backgroundColor:'#FAFAFA' ,
       paddingBottom :20 ,
   },
   appBarContainer:{},
   appBar:{
       width :'100%' ,
       height :200 ,
   },
   titleContainer:{
       marginTop :50 ,
       alignItems :'center' ,
   },
   title:{
       fontSize :28 ,
       fontWeight :'bold' ,
       color :'#85A8CC' ,
   },
   subtitleContainer:{
       marginTop :30 ,
       alignItems :'center' ,
   },
   subtitle:{
       fontSize :18 ,
       color :'#25295C' ,
   },
   inputContainer:{
       marginTop :40 ,
       alignItems :'center' ,
   },
   rowContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between', // Espace entre les champs
       width: '90%', // Prendre toute la largeur disponible
       maxWidth: 400, // Limiter la largeur pour un meilleur rendu
       marginBottom: 20,
   },
   inputSmall: {
       height: 50,
       width: '15%', // Ajustez la largeur pour un bon espacement
       borderColor: '#BDB7B7',
       borderWidth: 1,
       borderRadius: 10,
       backgroundColor: '#FFFFFF',
       paddingHorizontal: 10,
   },
   buttonContainer:{
       width :350 ,
       height :50 ,
       borderRadius :10 ,
       overflow :'hidden' ,
       marginTop :20 ,
   },
   loginButton:{
       flex :1 ,
       justifyContent :'center' ,
       alignItems :'center' ,
   },
   loginButtonText:{
       color:'#FFFFFF' ,
       fontSize :25 ,
   }
});