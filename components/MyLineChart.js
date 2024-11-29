import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart } from 'react-native-chart-kit';

const MyLineChart = () => {
  const [timeFrame, setTimeFrame] = useState('Monthly');
  const [modalVisible, setModalVisible] = useState(false);

  // Fonction pour générer les labels dynamiquement en fonction du filtre
  const getLabels = (timeFrame) => {
    switch (timeFrame) {
      case 'Daily':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      case 'Monthly':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      case 'Yearly':
        return ['2020', '2021', '2022', '2023', '2024', '2025'];
      default:
        return [];
    }
  };

  // Données pour le graphique
  const data = {
    labels: getLabels(timeFrame),
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: () => '#688DB2',
      },
      {
        data: [30, 65, 40, 50, 70, 85],
        color: () => '#A6C1EE',
        strokeWidth: 3,
      },
      {
        data: [65, 45, 75, 55, 85, 90],
        color: () => '#DBEDD9',
        strokeWidth: 3,
      },
      {
        data: [55, 40, 60, 70, 60, 50],
        color: () => '#FFCECE',
        strokeWidth: 3,
      },
      {
        data: [70, 30, 80, 50, 95, 60],
        color: () => '#CCCDD0',
        strokeWidth: 3,
      },
    ],
  };

  // Calcul de la largeur dynamique du graphique
  const chartWidth = Dimensions.get('window').width - 40; // Ajustement de la largeur pour correspondre à l'écran
  const numberOfPoints = data.labels.length;
  const dynamicWidth = Math.max(chartWidth, numberOfPoints * 70); // Assurez-vous que chaque point a assez d'espace

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: () => '#B2B2B2',
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '2',
    },
    propsForLabels: {
      fontSize: 12,
    },
    linePadding: 20,
  };

  const handleFilterSelect = (filter) => {
    setTimeFrame(filter);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Global System Statistics</Text>

        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
            <Text style={styles.filterText}>
              {timeFrame} <Icon name="caret-down" size={12} color="#336699" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card avec le graphique */}
      <View style={styles.chartContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <LineChart
            data={data}
            width={dynamicWidth}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            withVerticalLines={true}
            withHorizontalLines={true}
            withDots={false}
            withShadow={false}
            withInnerLines={true}
            withOuterLines={true}
            fromZero={true}
            yAxisLabel=""
            yAxisSuffix=""
            withLegend={false} // Désactive la légende automatique du graphique
          />
        </ScrollView>
      </View>

      {/* Légendes sous le graphique */}
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { backgroundColor: '#688DB2' }]} />
          <Text style={styles.legendText}>Find the evolution of users.</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { backgroundColor: '#A6C1EE' }]} />
          <Text style={styles.legendText}>Find the evolution of folders created.</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { backgroundColor: '#DBEDD9' }]} />
          <Text style={styles.legendText}>Find the evolution of companies.</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { backgroundColor: '#FFCECE' }]} />
          <Text style={styles.legendText}>Find the evolution of Values unretrieved.</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { backgroundColor: '#CCCDD0' }]} />
          <Text style={styles.legendText}>Find the evolution of tokens spent.</Text>
        </View>
      </View>

      {/* Modal pour le filtre */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Time Frame</Text>
            <TouchableOpacity onPress={() => handleFilterSelect('Daily')} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilterSelect('Monthly')} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFilterSelect('Yearly')} style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Yearly</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
  container: {
    paddingVertical: 10,
    marginHorizontal: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginVertical: 20,
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
    color: '#A6C1EE',
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
  legendContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendCircle: {
    width: 30,
    height: 11,
    borderRadius: 5,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#565656',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#555',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#336699',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyLineChart;
