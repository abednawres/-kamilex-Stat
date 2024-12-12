import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Modal } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ],
  monthNamesShort: ['Jan.', 'Fév.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';

const TokenHistogram = () => {
  const [modalVisible, setModalVisible] = useState(false); // État pour afficher/masquer le modal
  const [selectedRange, setSelectedRange] = useState({}); // État pour stocker la plage de dates sélectionnée

  // Fonction pour gérer la sélection de la plage de dates
  const handleDateSelect = (day) => {
    if (selectedRange.startDate && !selectedRange.endDate) {
      // Si une date de début est déjà sélectionnée, fermer la plage
      setSelectedRange({
        startDate: selectedRange.startDate,
        endDate: day.dateString,
      });
    } else {
      // Sinon, ouvrir une nouvelle plage
      setSelectedRange({
        startDate: day.dateString,
        endDate: null,
      });
    }
  };

  // Fonction pour confirmer la plage de dates et fermer le modal
  const confirmDateRange = () => {
    if (selectedRange.startDate && selectedRange.endDate) {
      setModalVisible(false); // Fermer le modal après confirmation
    }
  };

  // Données pour le graphique à barres
  const getData = (startDate, endDate) => {
    if (!startDate || !endDate) {
      // Par défaut, afficher les données mensuelles
      return {
        labels: [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ],
        datasets: [{
          data: [20, 45, 28, 80, 99, 43, 55, 60, 70, 90, 100, 110] // Exemple de données mensuelles
        }]
      };
    }

    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const labels = Array.from({ length: days }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    });
    const data = Array.from({ length: days }, () => Math.floor(Math.random() * 100));

    return {
      labels,
      datasets: [{ data }]
    };
  };

  const data = getData(selectedRange.startDate, selectedRange.endDate); // Obtenez les données basées sur la plage de dates

  // Configuration du graphique avec des couleurs personnalisées
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(22, 83, 126, ${opacity})`, // Couleur des barres
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Couleur des étiquettes sur l'axe X
    style: {
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#D0D0D0',
      paddingRight: '10%',
      paddingLeft: '10%',
    },
    propsForLabels: {
      fontSize: '12',
      fontWeight: 'bold',
      fill: '#000', // Couleur noire pour les étiquettes sur l'axe Y
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726', // Couleur des points si nécessaire
    },
    yAxisLabel: '', // Supprimer le préfixe de l'axe Y
    yAxisInterval: 100,
    verticalLabelRotation: -30,
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Global System Statistics</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
          <Text style={styles.filterText}>
            {selectedRange.startDate && selectedRange.endDate
              ? `${selectedRange.startDate} - ${selectedRange.endDate}`
              : 'Select Date Range'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal pour sélectionner la plage de dates */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Date Range</Text>

            {/* Calendrier interactif */}
            <Calendar
              style={styles.calendar}
              markingType="period"
              onDayPress={handleDateSelect}
              markedDates={{
                ...(selectedRange.startDate && { [selectedRange.startDate]: { startingDay: true, color: '#336699' } }),
                ...(selectedRange.endDate && { [selectedRange.endDate]: { endingDay: true, color: '#336699' } }),
                ...(selectedRange.startDate &&
                  selectedRange.endDate && {
                    [selectedRange.startDate]: { startingDay: true, color: '#336699' },
                    [selectedRange.endDate]: { endingDay: true, color: '#336699' },
                    ...Array.from(
                      { length: Math.ceil((new Date(selectedRange.endDate) - new Date(selectedRange.startDate)) / (1000 * 60 * 60 * 24)) },
                      (_, i) => {
                        const date = new Date(selectedRange.startDate);
                        date.setDate(date.getDate() + i);
                        return { [date.toISOString().split('T')[0]]: { color: '#85A8CC' } };
                      }
                    ).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
                  }),
              }}
            />

            {/* Bouton pour confirmer la plage de dates */}
            <TouchableOpacity onPress={confirmDateRange} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Espace pour le graphique à barres avec défilement horizontal */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BarChart
          data={data}
          width={Dimensions.get('window').width + 190} // Ajuster la largeur du graphique pour permettre le défilement
          height={220}
          chartConfig={chartConfig}
          style={{ marginVertical: 8 }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginHorizontal: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row', // Aligner le titre et le bouton côte à côte
    justifyContent: 'space-between', // Espacer le titre et le bouton
    alignItems: 'center', // Centrer verticalement
    marginBottom: 10,
  },
  title: {
    fontSize: 14, // Réduire la taille du titre
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#85A8CC',
  },
  filterButton: {
    paddingVertical: 7, // Réduire la hauteur du bouton
    paddingHorizontal: 5, // Réduire la largeur du bouton
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  filterText: {
    color: '#565656',
    fontWeight: 'bold',
    fontSize: 12, // Réduire la taille du texte du bouton
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 20,
  },
  confirmButton: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#336699',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TokenHistogram;