import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Boas-Vindas a DoctorCare!</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.text}>Assistência médica simplificada para todos!</Text>
      <Text style={styles.text}>Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz da sua doença e proporcionar a cura.!</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cardContainer}>
        
        <View style={styles.card}>
          <Text style={styles.titlecards}>+3.500</Text>
          <Text style={styles.textcard}>Pacientes atendidos</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>+15</Text>
          <Text style={styles.textcard}>Especialidades disponíveis</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>+10</Text>
          <Text style={styles.textcard}>Anos de mercados</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d7f4e6',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#165034',
  },
  text: {
    fontSize: 17,
    marginHorizontal: 24,
    marginBottom: 10,
    color: '#27905E',
  },
  cardContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#F6F8F8',
  },
  titlecards: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#000',
  },
  textcard:{
    fontSize: 17,
    marginHorizontal: 24,
    marginBottom: 10,
    color: '#27905E',
    textAlign: 'center',
  }
});

export default HomeScreen;
