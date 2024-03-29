import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
        <Image source={require('./../Assets/image/bannertop.png')}/>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./../Assets/image/whale.png')} style={styles.whaleImage} />
            </View>
            <Text style={{textAlign:'center', marginBottom:20, fontSize:25, color:'#b1b1b1'}}>Login</Text>
            
            <View style={styles.infocontainer}>
                <Ionicons name="person" size={20} color="#999999" />
                <TextInput 
                    style={{color: '#cacaca', fontSize:15, flex: 1}} 
                    placeholder="Username..." 
                    placeholderTextColor="#cacaca"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
            </View>
            <View style={styles.infocontainer}>
                <AntDesign name="lock" size={20} color="#999999" />
                <TextInput 
                    style={{color: '#cacaca', fontSize:15, flex: 1}} 
                    placeholder="Password..." 
                    placeholderTextColor="#cacaca"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.botton} activeOpacity={0.8}>
                <Text style={{color: '#fff', fontSize:20}}>Sign in</Text>
            </TouchableOpacity>
            <View >
                <Text style={{color: '#cacaca', fontSize:15}}> Forgot your password?</Text>
            </View>
            <View >
                <Text style={{color: '#a6a6a9', fontSize:15, marginTop: 16}}> Sign up</Text>
            </View>
        </View>
        <Image source={require('./../Assets/image/bannerbottom.png')} style ={{marginTop:-20}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        backgroundColor: '#ffff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center', 
    },
    imageContainer: {
        marginTop:-50,
    },
    whaleImage: {
        width: 70, 
        height: 105,
        marginTop:-10 
    },
    botton:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        width: 200,
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    infocontainer:{
        backgroundColor:Colors.second,
        padding:10,
        margin:5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        width: 200,
        height: 40,
        display:'flex',
        flexDirection:'row'

    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
});
