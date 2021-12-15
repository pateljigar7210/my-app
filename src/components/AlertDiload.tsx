import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,ActivityIndicator} from "react-native";

interface AlertDiloadProps{
    message:string
  isViseble:boolean
  okPress:()=>void
}

const AlertDiload = (props:AlertDiloadProps) => {
  return (
   
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isViseble}
        onRequestClose={() => {
         
         
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <Text style={styles.modalText}>{props.message}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.okPress()}
            >
              <Text style={styles.textStyle}> Ok </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
     

  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width:60
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default AlertDiload;