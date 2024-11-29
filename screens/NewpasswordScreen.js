import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Newpassword({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleContinuePress = () => {
    navigation.navigate('Congratulation');
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
        <Text style={styles.title}>Set A New Password</Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Create a new, unique password for security</Text>
      </View>

      <View style={styles.inputContainer}>
        {/* Champ New Password */}
        <View style={[styles.inputWrapper]}>
          <Icon name="lock" size={20} color="#242155" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#ACA7A7"
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Champ Confirm Password */}
        <View style={[styles.inputWrapper, { marginTop: 10 }]}>
          <Icon name="lock" size={20} color="#242155" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={!isConfirmPasswordVisible}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
            <Icon
              name={isConfirmPasswordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#ACA7A7"
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Bouton Continue */}
        <TouchableOpacity onPress={handleContinuePress} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#242155', '#262D60', '#44C7F1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.loginButton}
          >
            <Text style={[styles.loginButtonText, { fontWeight: 'bold' }]}>UPDATE PASSWORD</Text>
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
       fontSize :30 ,
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
   inputWrapper:{
       flexDirection :'row' ,
       alignItems :'center' ,
       width :350 ,
       borderColor :'#BDB7B7' ,
       borderWidth :1 ,
       borderRadius :10 ,
       backgroundColor :'#FFFFFF' ,
       marginBottom :20 ,
   },
   icon:{
       paddingHorizontal :10 ,
   },
   visibilityIcon: {
     paddingHorizontal: 10,
   },
   input:{
       height :50 ,
       flex :1 ,
       paddingHorizontal :10 ,
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