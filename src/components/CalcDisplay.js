import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export default class CalcDisplay extends React.Component{
    static defaultProps ={
        display:"",
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{},
    display:{ fontSize:70, color:"white",textAlign:"right"},
})