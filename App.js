import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'


export default function App(){
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  
  const handleSubmit = ()=>{
    if(form.email === '' || form.password === ''){
      Alert.alert('Please Fill in All Required Spaces')}
      else {
        Alert.alert('Login Successful')
      }
  }
  
  return(
    <SafeAreaView style={styles.interface}>
      <View style={styles.container}>
        <Text style={styles.title}> Log In to JooKuu</Text>

        <View> 

          <View style={styles.input}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
            style={styles.user}
            placeholder='example@mail.com'
            value={form.email} 
            onChangeText={email=> setForm({...form, email})}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
            secureTextEntry
            style={styles.user}
            placeholder='********'
            value={form.password} 
            onChangeText={password=> setForm({...form, password})}/>
          </View>

          <View style={styles.press}>
            <TouchableOpacity
          onPress={handleSubmit}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Log In</Text>
              </View>
            </TouchableOpacity>

          </View>


        </View>
        
        
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  interface: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,

  },
  container: {
    backgroundColor:'#f2f4f5',
    padding: 30,
    borderRadius: 20,
    width:340
  },
  
  title:{
    fontSize: 27,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 6,
    marginTop:45,   
    textAlign: 'center'

  },
  input: {
    marginBottom: 16
  },
  label:{
    fontSize: 16,
    fontWeight:'700',
    color: '#222',
    marginBottom:7

  },
  user:{
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    fontSize: 11,
    color: '#222',
    fontWeight: '500'
  },
  press:{
    backgroundColor: '#ff0000',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10

  },
  btnText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '400'

  }

})