
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {DiceButton} from './../components';

export default class DiceScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {DiceOne: false};    
        this.state = {DiceTwo: false}; 
        this.state = {DiceThree: false}; 
        this.state = {DiceFour: false}; 
        this.state = {DiceFive: false}; 
        this.state = {DiceSix: false}; 
	}
  onOnePress=()=>{
    this.setState({DiceOne: true});  
    this.setState({DiceTwo: false});
    this.setState({DiceThree: false});
    this.setState({DiceFour: false});
    this.setState({DiceFive: false});
    this.setState({DiceSix: false});  
}
onTwoPress=()=>{
  this.setState({DiceTwo: true});  
  this.setState({DiceOne: false})
  this.setState({DiceThree: false});
  this.setState({DiceFour: false});
  this.setState({DiceFive: false});
  this.setState({DiceSix: false});
}
onThreePress=()=>{
  this.setState({DiceThree: true});
  this.setState({DiceOne: false})  
  this.setState({DiceTwo: false}); 
  this.setState({DiceFour: false});
  this.setState({DiceFive: false});
  this.setState({DiceSix: false}); 
  
}
onFourPress=()=>{
  this.setState({DiceFour: true});
  this.setState({DiceOne: false});
  this.setState({DiceTwo: false});
  this.setState({DiceThree: false}); 
  this.setState({DiceFive: false});
  this.setState({DiceSix: false});
}
onFivePress=()=>{
  this.setState({DiceFive: true});
  this.setState({DiceOne: false});
  this.setState({DiceTwo: false}); 
  this.setState({DiceThree: false}); 
  this.setState({DiceFour: false});
  this.setState({DiceSix: false}); 
}
onSixPress=()=>{
  this.setState({DiceSix: true}); 
  this.setState({DiceOne: false});
  this.setState({DiceTwo: false}); 
  this.setState({DiceThree: false}); 
  this.setState({DiceFour: false}); 
  this.setState({DiceFive: false});
}
    
    render(){
        return(
               <View style={styles.container}>
                 {this.state.DiceOne &&
                <View>
<Image
style={styles.tinyLogo}
source={require('../../assets/images/dice-1.png')}
/>
</View>} 
{this.state.DiceTwo &&
                <View>
<Image
style={styles.tinyLogo}
source={require('../../assets/images/dice-2.png')}
/>
</View>} 
{this.state.DiceThree &&
                <View>
<Image
style={styles.tinyLogo}
source={require('../../assets/images/dice-3.png')}
/>
</View>} 
{this.state.DiceFour &&
                <View>
<Image
style={styles.tinyLogo}
source={require('../../assets/images/dice-4.png')}
/>
</View>} 
{this.state.DiceFive &&
                <View>
<Image
style={styles.tinyLogo}
source={require('../../assets/images/dice-5.png')}
/>
</View>}
{this.state.DiceSix &&
                <View>
<Image
style={styles.tinyLogo}
source={require('../../assets/images/dice-6.png')}
/>
</View>}    
                   
               <View>
               <View style={ styles.buttonRow}>
             <DiceButton onPress={this.onOnePress}title="1" color="white" backgroundColor="#484848"></DiceButton>
             <DiceButton  onPress={this.onTwoPress} title="2" color="white" backgroundColor="#484848"></DiceButton>
             <DiceButton  onPress={this.onThreePress} title="3" color="white" backgroundColor="#484848"></DiceButton>
            
                  </View>
                  
                  <View style={ styles.buttonRow}>
             <DiceButton onPress={this.onFourPress}  title="4" color="white" backgroundColor="#484848"></DiceButton>
             <DiceButton onPress={this.onFivePress}  title="5" color="white" backgroundColor="#484848"></DiceButton>
             <DiceButton onPress={this.onSixPress}  title="6" color="white" backgroundColor="#484848"></DiceButton>
             
                  </View>
                 
                  
                  </View>
             
            </View>
        );
    }
   }

const styles=StyleSheet.create({
    container:{flex:1,backgroundColor:"black"},
   
  buttonRow:{ flexDirection:'row',justifyContent:'space-between'}, 
  
})