import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native'
function App(){
  return(
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Samsung official</Text>
      </View>
    </SafeAreaView>

  )
}
 const styles = StyleSheet.create({

  container:{
    justifyContent:'center',
    backgroundColor:'red',
    marginTop:50,
  },
  text:{
    fontSize:40,
    textAlign:'center',
  }
  
 });
export default  App;