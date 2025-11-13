import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import MapView from 'react-native-maps';
export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Cerrar Sesión',
          onPress: () => navigation.navigate('Login'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.deviceInfoOverlay}>
          <View style={styles.deviceInfoContent}>
            <View style={styles.deviceStatus}>
              <Text style={styles.statusConnected}>● Connected</Text>
              <Text style={styles.batteryLevel}>🔋 85%</Text>
              <Text style={styles.deviceId}>ID: SC-001</Text>
            </View>
            <View style={styles.deviceActions}>
              <TouchableOpacity style={styles.overlayBtn}>
                <Text>📍 Find</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.overlayBtn}>
                <Text>🔔 Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.overlayBtn}>
                <Text>📊 History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.overlayBtn, styles.disconnect]}>
                <Text>🔌 Disconnect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceInfoOverlay: {
    position: 'absolute',
    bottom: 60,
    left: '50%',
    transform: [{ translateX: -150 }],
    width: 300,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
  deviceInfoContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  deviceStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    fontSize: 14,
    fontWeight: '500',
  },
  statusConnected: {
    color: '#28a745',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  batteryLevel: {
    color: '#28a745',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  deviceId: {
    color: '#666',
    fontFamily: 'Courier New',
    backgroundColor: '#f8f9fa',
    padding: 4,
    borderRadius: 6,
    fontSize: 12,
  },
  deviceActions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  overlayBtn: {
    padding: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f9fa',
    color: '#333',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  disconnect: {
    backgroundColor: '#dc3545',
    color: '#fff',
    borderColor: '#dc3545',
  },
});
