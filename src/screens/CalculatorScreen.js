require("./../lib/swisscalc.lib.format.js");
require("./../lib/swisscalc.lib.operator.js");
require("./../lib/swisscalc.lib.operatorCache.js");
require("./../lib/swisscalc.display.memoryDisplay.js");
require("./../lib/swisscalc.display.numericDisplay.js");
require("./../lib/swisscalc.lib.shuntingYard.js");
require("./../lib/swisscalc.calc.calculator.js");
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {CalcButton,CalcDisplay} from './../components';

export default class CalculatorScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
display:"0",
        }
  //intialize calculator      
this.oc = global.swisscalc.lib.operatorCache;
this.calc = new global.swisscalc.calc.calculator();
	}
    //occurs when a digit is pressed..
    onDigitPress=(digit)=>{
        this.calc.addDigit(digit);
        this.setState({display:this.calc.getMainDisplay()});
    }
    //occurs when binary operators is pressed..
onBinaryOperatorPress=(operator)=>{
    this.calc.addBinaryOperator(operator);
    this.setState({display:this.calc.getMainDisplay()});
}
//occurs when unary operators is pressed..
onUnaryOperatorPress=(operator)=>{
this.calc.addUnaryOperator(operator);
this.setState({display:this.calc.getMainDisplay()});
}


    //occurs when  clear is pressed..
    onClearPress=()=>{
        this.calc.clear();
        this.setState({display:this.calc.getMainDisplay()});
    }
//occurs when  +/- is pressed..
onPlusMinusPress=()=>{
    this.calc.negate();
    this.setState({display:this.calc.getMainDisplay()});
}
//occurs when  = is pressed..
onEqualsPress=()=>{
    this.calc.equalsPressed();
    this.setState({display:this.calc.getMainDisplay()});
}
    render(){
        return(
               <View style={styles.container}>
                   <View style={styles.displayContainer}>
                   <CalcDisplay display={this.state.display}></CalcDisplay>
                   </View>
               <View>
              <View style={ styles.buttonRow}>
             <CalcButton onPress={this.onClearPress} title="C" color="black" backgroundColor="#bdbdbd"></CalcButton>
             <CalcButton onPress={this.onPlusMinusPress} title="+/_" color="black" backgroundColor="#bdbdbd"></CalcButton>
             <CalcButton onPress={()=>{this.onUnaryOperatorPress(this.oc.PercentOperator)}}  title="%" color="black" backgroundColor="#bdbdbd"></CalcButton>
             <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.DivisionOperator)}}title="/" color="white" backgroundColor="#ff9e40"></CalcButton>   
                  </View>
                  <View style={ styles.buttonRow}>
             <CalcButton onPress={()=>{this.onDigitPress('7')}} title="7" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onDigitPress('8')}} title="8" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onDigitPress('9')}} title="9" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}}title="x" color="white" backgroundColor="#ff9e40"></CalcButton>   
                  </View>
                  <View style={ styles.buttonRow}>
             <CalcButton onPress={()=>{this.onDigitPress('4')}} title="4" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onDigitPress('5')}} title="5" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onDigitPress('6')}} title="6" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.SubtractionOperator)}}title="-" color="white" backgroundColor="#ff9e40"></CalcButton>   
                  </View>
                  <View style={ styles.buttonRow}>
             <CalcButton onPress={()=>{this.onDigitPress('1')}} title="1" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onDigitPress('2')}} title="2" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onDigitPress('3')}} title="3" color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.AdditionOperator)}}title="+" color="white" backgroundColor="#ff9e40"></CalcButton>   
                  </View>
                  <View style={ styles.buttonRow}>
             <CalcButton onPress={()=>{this.onDigitPress('0')}} title="0" color="white" backgroundColor="#484848" style={{flex:2}}></CalcButton>
             <CalcButton onPress={()=>{this.onDigitPress('.')}} title="." color="white" backgroundColor="#484848"></CalcButton>
             <CalcButton onPress={this.onEqualsPress} title="=" color="white" backgroundColor="#ff9e40"></CalcButton>
             
                  </View>
                  </View>
             
            </View>
        );
    }
   
}
const styles=StyleSheet.create({
    container:{flex:1,backgroundColor:"black"},
    displayContainer:{flex:1,justifyContent:'flex-end'},
  buttonRow:{ flexDirection:'row',justifyContent:'space-between'}, 
})