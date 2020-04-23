import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      hasCameraPermissions:null,
      scanned:false,
      scannedData:'',
      buttonState:'normal',
    }
  }
  getCameraPermissions = async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions:status==="granted"
    });
  }
  handleBarCodeScanned=async()=>{
    this.setState({
      scanned:true,
      scannedData:data,
      buttonState:'normal',
    })
  }
    render() {
      const hasCameraPermissions = this.state.cameraPermissions;
      const scanned=this.state.scanned;
      const buttonState = this.state.buttonState;
      return (
        <View style={styles.container}>
          <Text style = {styles.displayText}>
        {hasCameraPermissions===true? this.state.scannedData:"request camera permissions"}

          </Text>
          <TouchableOpacity 
          onPress = {this.getCameraPermissions}
          style = {styles.scannButton}>
            <Text style = {styles.buttonText}>scann QR code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  const style = StyleSheet.create({
    container:{
      flex: 1, justifyContent: 'center' ,alignItems: 'center' 
    },
    scannButton:{
      backgroundColor:'blue',
      padding:10,
      margin:10
    },
    displayText:{
      fontSize:15,
      textDecorationLine:'underline'
    },
    buttonText:{
      fontSize:20,
      textDecorationLine:'underline'
    }
  })