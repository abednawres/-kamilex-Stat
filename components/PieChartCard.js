import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PieChartCard = ({ children }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardText}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 150,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        marginRight: 15,
        marginLeft:15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 16,
        color: '#848A9C',
        textAlign: 'center',
        position: 'absolute', // Permet de positionner le texte avec précision
        top: 10, // Place le texte en haut
        left: 0, // Nécessaire pour aligner à partir de l'origine
        right: 0, // Nécessaire pour garder le centrage horizontal
    },
});

export default PieChartCard;