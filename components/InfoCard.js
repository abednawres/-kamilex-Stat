import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const InfoCard = ({ title, value, description, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.headerContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Icon name="chevron-right" size={15} color="#336699" style={styles.icon} />
      </View>
      <Text style={styles.cardValue}>{value}</Text>
      <View style={styles.descriptionContainer}>
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
    color: '#9DB0CE',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Alignement en haut
    width: '100%',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'left',
    marginTop: 10,
  },
  cardImage: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginTop: -10, // Ajustement de la position de l'image
  },
});

export default InfoCard;