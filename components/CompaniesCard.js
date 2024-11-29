import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CompaniesCard = ({ title, value, description, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.headerContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Icon name="chevron-right" size={15} color="#000000" style={styles.icon} />
      </View>
      <Text style={styles.cardValue}>{value}</Text>
      <View style={styles.descriptionContainer}>
        {/* Ajout de l'icône étoile avant la description */}
        <Icon name="star" size={20} color="#FBBE47" style={styles.starIcon} />
        <Text style={styles.cardDescription}>{description}</Text>
        {imageSource && <Image source={imageSource} style={styles.cardImage} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    elevation: 2,
    alignItems: 'flex-start',
    width: '90%',
    alignSelf: 'center',
    height: 120,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#336699',
    textAlign: 'left',
  },
  icon: {
    marginLeft: 'auto',
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#565656',
    textAlign: 'left',
    marginTop: 5,
  },
  descriptionContainer: {
    flexDirection: 'row', // Changer en row pour aligner l'icône et le texte
    justifyContent: 'flex-start', // Alignement à gauche
    alignItems: 'center', // Centrer verticalement
    width: '100%',
  },
  cardDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'left',
    marginTop: 5, // Réduisez cette valeur pour déplacer la description vers le haut
    marginLeft: 5, // Espacement entre l'icône et la description
  },
  starIcon: {
    marginRight: 2, // Espacement entre l'icône et la description
  },
  cardImage: {
    width: 40,
    height: 40,
    marginLeft: 130,
    marginTop: -30, // Ajustement de la position de l'image
  },
});

export default CompaniesCard;