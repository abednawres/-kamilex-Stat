import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart } from 'react-native-chart-kit';

const MyCurveValues = () => {
  const [timeFrame, setTimeFrame] = useState('Monthly'); // État pour le filtre de date
  const [modalVisible, setModalVisible] = useState(false); // État pour le modal

  const handleFilterSelect = (filter) => {
    setTimeFrame(filter);
    setModalVisible(false); // Fermer le modal après sélection
  };

  // Données pour le graphique en ligne (courbe)
  const getData = () => {
    switch (timeFrame) {
      case 'Daily':
        return {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            data: [5, 10, 15, 20, 25, 30, 35],
            strokeWidth: 3, // Épaisseur de la ligne
          }]
        };
      case 'Yearly':
        return {
          labels: ['2020', '2021', '2022', '2023'],
          datasets: [{
            data: [200, 300, 400, 500],
            strokeWidth: 3,
          }]
        };
      case 'Monthly':
      default:
        return {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            data: [20, 45, 28, 80, 99, 43, 55, 60, 70, 90, 100, 110],
            strokeWidth: 3,
          }]
        };
    }
  };

  const data = getData();

  // Configuration du graphique avec des couleurs personnalisées
 const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(22, 83, 126, ${opacity})`, // Couleur de la ligne
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Couleur des étiquettes sur l'axe X
  style: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingRight: "10%",
    paddingLeft: "10%"
  },
  propsForLabels: {
    fontSize: "12",
    fontWeight: "bold",
    fill: "#000", // Couleur noire pour les étiquettes sur l'axe Y
  },
  propsForDots: {
    r: "6", // Taille des points
    strokeWidth: "2", // Épaisseur de la bordure des points
    stroke: "#ffa726", // Couleur des points
  },
  yAxisLabel: '',
  yAxisInterval: 100,
  verticalLabelRotation: -30,
  useCubicInterpolation: true, // Lissage de la courbe
};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Global System Statistics</Text>

        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
            <Text style={styles.filterText}>{timeFrame} <Icon name="caret-down" size={12} color="#336699" /></Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal pour afficher les options de filtrage */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Time Frame</Text>
            {['Daily', 'Monthly', 'Yearly'].map((filter) => (
              <TouchableOpacity key={filter} onPress={() => handleFilterSelect(filter)} style={styles.modalOption}>
                <Text style={styles.modalOptionText}>{filter}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Espace pour le graphique en ligne avec défilement horizontal */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <LineChart
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#85A8CC',
  },
  filterContainer: {
    alignItems: 'flex-end',
  },
  filterButton: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#565656',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 5,
  },

  // Styles pour le modal
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
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#336699',
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default MyCurveValues;
