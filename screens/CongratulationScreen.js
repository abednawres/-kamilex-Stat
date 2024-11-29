import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assurez-vous que cela est correct
import { LinearGradient } from 'expo-linear-gradient';

export default function Congratulation({ navigation }) {
  const handleContinuePress = () => {
    navigation.navigate('Dashboard');
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
        <Text style={styles.title}>Congratulations</Text>
      </View>

      {/* Ajout du cercle avec l'icône */}
      <View style={styles.circleContainer}>
        <Icon name="check" size={30} color="white" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleContinuePress} style={[styles.buttonInner, { marginTop: 40 }]}>
          <LinearGradient
            colors={['#242155', '#262D60', '#44C7F1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.loginButton}
          >
            <Text style={[styles.loginButtonText, { fontWeight: 'bold' }]}>BACK TO YOUR APP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
       flexGrow: 1,
       backgroundColor: '#FAFAFA',
       paddingBottom: 20,
   },
   appBarContainer: {},
   appBar: {
       width: '100%',
       height: 200,
   },
   titleContainer: {
       marginTop: 50,
       alignItems: 'center',
   },
   title: {
       fontSize: 30,
       fontWeight: 'bold',
       color: '#85A8CC',
       marginBottom: 20,
   },
   circleContainer: {
       width: 50,
       height: 50,
       borderRadius: 25,
       backgroundColor: '#336699',
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 40,
       alignSelf: 'center',
   },
   buttonContainer: {
       marginTop: 40,
       alignItems: 'center',
   },
   buttonInner: {
       width: 350,
       height: 50,
       borderRadius: 10,
       overflow: 'hidden',
   },
   loginButton: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
   loginButtonText: {
       color:'#FFFFFF',
       fontSize: 25,
   }
});