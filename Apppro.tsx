import React from "react";
import ImagesAssets from './assets/imageassets'
import {

    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
    ImageBackground

} from "react-native"


function Apppro():JSX.Element{
    const isdarkmode = useColorScheme() === 'dark'
    // const image = {uri: '../'};
    return(


        <ImageBackground source={ImagesAssets.bannerlist2} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={isdarkmode?styles.whitetext:styles.whitetext}>Helllo i am app pro</Text>
            </View>
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({



    container:{
        flex:1,
        
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:26,
        fontWeight:'bold',
        
    },
    whitetext:{
        color:'white',

    },
    darktext:{
        color:'black',
    },
    image:{
        flex:1,
        justifyContent:"center"
    }


})

export default Apppro;