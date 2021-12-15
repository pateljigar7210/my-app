import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,ActivityIndicator} from "react-native";

interface ProgressDiloagProps{
  isViseble:boolean
}

const ProgressDiloag = (props:ProgressDiloagProps) => {
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

            <ActivityIndicator/>
             <Text style={styles.modalText}>Please Wait...</Text>
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
    textAlign: "center"
  },
  modalText: {
    marginTop: 15,
    textAlign: "center"
  }
});

export default ProgressDiloag;