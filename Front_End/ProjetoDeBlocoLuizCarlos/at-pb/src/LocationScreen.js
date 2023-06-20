import React, { useState, useEffect } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationScreen = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'Este aplicativo precisa de permissão para acessar sua localização.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasLocationPermission(true);
      } else {
        setHasLocationPermission(false);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View>
      {hasLocationPermission ? (
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: -22.983705,
            longitude: -43.223019,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: -22.983705,
              longitude: -43.223019,
            }}
            title="Localização Fixa"
            description="Este é o local fixo."
          />
        </MapView>
      ) : (
        <Text>Solicitação de permissão de localização</Text>
      )}
    </View>
  );
};

export default LocationScreen;
