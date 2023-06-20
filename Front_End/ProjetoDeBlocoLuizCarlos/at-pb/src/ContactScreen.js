import  { useEffect, useState } from 'react';
import { Text, View, StyleSheet,ScrollView,PermissionsAndroid, Platform, Dimensions } from 'react-native';
import {
  Button,
  Modal,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';

export const Botao = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>Contato</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

const ContactScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Entre em contato com a gente!</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.text}>Rua Humberto de Campos - Leblon, Rio de Janeiro - RJ</Text>
        <Text style={styles.text}>contato@doctorcare.com</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <View>
          <Botao />
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default ContactScreen;
