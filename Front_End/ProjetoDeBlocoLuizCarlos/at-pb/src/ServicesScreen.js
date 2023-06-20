import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ServicesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Serviços disponíveis</Text>
      
      <Text style={styles.text}>Como podemos ajudar?</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Emergência</Text>
          <Text style={styles.textcard}>Tratamento de emergências médicas e acidentes</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Clínica Geral</Text>
          <Text style={styles.textcard}>Atendimento médico para uma variedade de doenças e condições</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Cirurgia Geral</Text>
          <Text style={styles.textcard}>Procedimentos cirúrgicos não especializados</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Pediatria</Text>
          <Text style={styles.textcard}>Atendimento médico especializado em crianças</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Clínica Geral</Text>
          <Text style={styles.textcard}>Atendimento médico para uma variedade de doenças e condições</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Obstetrícia e Ginecologia</Text>
          <Text style={styles.textcard}>Cuidados relacionados à gravidez, parto e saúde feminina</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Ortopedia</Text>
          <Text style={styles.textcard}>Diagnóstico e tratamento de lesões e doenças do sistema musculoesquelético</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Cardiologia</Text>
          <Text style={styles.textcard}>Tratamento de doenças do coração e sistema circulatório</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Neurologia</Text>
          <Text style={styles.textcard}>Diagnóstico e tratamento de doenças do sistema nervoso</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Oncologia</Text>
          <Text style={styles.textcard}>Tratamento de câncer, incluindo quimioterapia e radioterapia</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Radiologia</Text>
          <Text style={styles.textcard}>Diagnóstico por imagem, como radiografias, tomografias e ressonâncias magnéticas</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Laboratório</Text>
          <Text style={styles.textcard}>Análises clínicas e testes de laboratório para diagnóstico</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Fisioterapia</Text>
          <Text style={styles.textcard}>Reabilitação física e terapia de movimento</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Psiquiatria</Text>
          <Text style={styles.textcard}>Diagnóstico e tratamento de transtornos mentais</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Urologia</Text>
          <Text style={styles.textcard}>Tratamento de doenças do sistema urinário em homens e mulheres</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Oftalmologia</Text>
          <Text style={styles.textcard}>Cuidados oculares, incluindo exames de vista e cirurgias oculares</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.titlecards}>Otorrinolaringologia</Text>
          <Text style={styles.textcard}>Diagnóstico e tratamento de doenças do ouvido, nariz e garganta</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d7f4e6',
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
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  textcard:{
    fontSize: 17,
    marginHorizontal: 24,
    marginBottom: 10,
    color: '#27905E',
    textAlign: 'center',
  }
});

export default ServicesScreen;


