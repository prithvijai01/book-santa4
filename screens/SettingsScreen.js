import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import MyHeader from '../components/MyHeader';
export default class SettingScreen extends Component{
  constructor(){
    super(
      this.state = {
        EmailID:'',
        firstName:'',
        lastName:'',
        address:'',
        Contact:'',
        DocID:''
    }
    )
  }
  getUserDetails = ()=>{
    var Email = firebase.auth().currentUser.email
    db.collection('users').where('email_id','===',Email).get().then(snapshot => {
      snapshot.forEach(doc => {
       var data =doc.data()
       this.setState({

         EmailID:data.email_ID,
         firstName:data.first_name,
         lastName:data.last_name,
         address:data.address,
         Contact:data.contact,
         DocID:doc.id

       }) 
      })
    })
  }
  updateUserDetails = ()=>{
    db.collection('users').doc(this.state.DocID).update({
      "first_name":this.state.firstName,
      "last_name":this.state.lastName,
      "address":this.state.address,
      "contact":this.state.Contact
    })

 }
    render(){
        return(
           <View style = {StyleSheet.container}>
               <MyHeader title = "Settigs" navigation = {this.props.navigation}/>
                   <View>
               <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TouchableOpacity onPress = {()=>{this.updateUserDetails()}}>
            <Text>
                Submit
            </Text>
        </TouchableOpacity>
        </View>
              
           </View>

        )
    }
}