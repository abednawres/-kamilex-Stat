import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FolderList = ({ folders = [] }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Folder List</Text>

      {/* En-têtes des colonnes */}
      <View style={styles.headerRow}>
        <View style={[styles.column, styles.columnHeader]}>
          <Text style={styles.headerText}>FolderID</Text>
        </View>
        <View style={[styles.column, styles.columnHeader]}>
          <Text style={styles.headerText}>Class</Text>
        </View>
        <View style={[styles.column, styles.columnHeader]}>
          <Text style={styles.headerText}>TSpent</Text>
        </View>
      </View>

      {/* Liste des dossiers avec ScrollView */}
      <ScrollView style={styles.folderList} nestedScrollEnabled={true}>
        {folders.length > 0 ? (
          folders.map((folder) => (
            <View key={folder.id} style={styles.folderRow}>
              <View style={styles.column}>
                <Text style={styles.folderText}>{folder.FolderID}</Text>
              </View>
              <View style={styles.column}>
                {/* Barre colorée contenant le texte */}
                <View
                  style={[
                    styles.statusBar,
                    { backgroundColor: getStatusColor(folder.Classification) },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      { color: getTextColor(folder.Classification) },
                    ]}
                  >
                    {folder.Classification}
                  </Text>
                </View>
              </View>
              <View style={styles.column}>
                <Text style={styles.folderText}>{folder.TokenSpent}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noFoldersText}>No folders available</Text>
        )}
      </ScrollView>
    </View>
  );
};

// Fonctions utilitaires (inchangées)
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'in progress':
      return '#D5E5FF';
    case 'done':
      return '#DBEDD9';
    case 'to do':
      return '#FFCECE';
    default:
      return '#E0E0E0';
  }
};

const getTextColor = (status) => {
  switch (status.toLowerCase()) {
    case 'in progress':
      return '#336699';
    case 'done':
      return '#7EA093';
    case 'to do':
      return '#F5518C';
    default:
      return '#000';
  }
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#85A8CC',
    paddingLeft: 15,
  },
  folderList: {
    maxHeight: 200, // Limitation de la hauteur pour permettre le scroll
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#D0D0D0',
    marginBottom: 10,
    paddingBottom: 10,
  },
  column: {
    width: 100,
    paddingHorizontal: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnHeader: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9DB0CE',
    textAlign: 'left',
  },
  folderRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  folderText: {
    fontSize: 13,
    color: '#565656',
    textAlign: 'center',
  },
  statusBar: {
    width: '120%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  statusText: {
    fontSize: 13,
  },
  noFoldersText: {
    paddingLeft: 15,
    color: '#565656',
  },
});

export default FolderList;
