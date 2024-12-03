import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FolderList = ({ folders = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const foldersPerPage = 10;

  // Pagination logic
  const indexOfLastFolder = currentPage * foldersPerPage;
  const indexOfFirstFolder = indexOfLastFolder - foldersPerPage;
  const currentFolders = folders.slice(indexOfFirstFolder, indexOfLastFolder);

  const totalPages = Math.ceil(folders.length / foldersPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Folder List</Text>

      {/* Column headers */}
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

      {/* Folder rows */}
      <ScrollView style={styles.folderList} nestedScrollEnabled={true}>
        {currentFolders.length > 0 ? (
          currentFolders.map((folder) => (
            <View key={folder.id} style={styles.folderRow}>
              <View style={styles.column}>
                <Text style={styles.folderText}>{folder.FolderID}</Text>
              </View>
              <View style={styles.column}>
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

      {/* Pagination */}
      <View style={styles.pagination}>
        <TouchableOpacity
          style={styles.pageArrow}
          disabled={currentPage === 1}
          onPress={() => handlePageChange(currentPage - 1)}
        >
          <Text style={styles.pageArrowText}>{'<'}</Text>
        </TouchableOpacity>
        {pages.map((page) => (
          <TouchableOpacity
            key={page}
            style={[
              styles.pageNumber,
              currentPage === page && styles.activePageNumber,
            ]}
            onPress={() => handlePageChange(page)}
          >
            <Text
              style={currentPage === page ? styles.activePageText : styles.inactivePageText}
            >
              {page}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.pageArrow}
          disabled={currentPage === totalPages}
          onPress={() => handlePageChange(currentPage + 1)}
        >
          <Text style={styles.pageArrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Utility functions for status bar colors
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

// Styles
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
    maxHeight: 200,
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  pageArrow: {
    padding: 5,
    marginHorizontal: 10,
  },
  pageArrowText: {
    fontSize: 18,
    color: '#9DB0CE',
  },
  pageNumber: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9DB0CE',
  },
  activePageNumber: {
    backgroundColor: '#85A8CC',
    borderColor: '#85A8CC',
  },
  inactivePageText: {
    fontSize: 14,
    color: '#555',
  },
  activePageText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default FolderList;
