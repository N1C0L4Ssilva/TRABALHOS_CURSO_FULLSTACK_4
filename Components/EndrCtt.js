import React from "react"
import { StyleSheet,View,Text,FlatList } from 'react-native';
const EnderecoContato=(props)=>{
    return(
    <View style={Estilo.EndrContDiv}>
        <Text style={Estilo.EndrContSpan}>{props.Rua},{props.Numero} - {props.Bairro}</Text>
        <Text style={Estilo.EndrContSpan}> {props.Cidade} - {props.Uf} </Text>
        <View style={Estilo.hr}/>

        <FlatList style={Estilo.CategUi} data={props.Telefones}
            renderItem={({item}) => <Text>{item}</Text>}
        ></FlatList>
    </View>)
}

const CoresStyle={
    'Black':'#000000',
    'White':'#ffffff',
    'PlaceHolder':'#7C7C7C',
    'BackColor':'#909090',
    'TopColor':'#d9d9d9'
  }
const Estilo=StyleSheet.create({
    EndrContSpan:{
        fontSize:12,
        marginBottom:5
    },
    EndrContDiv:{
        padding: 5,
        marginBottom: 5,
        borderRadius: 5,
        borderColor: '#000000',
        borderStyle: 'solid',
        borderWidth: .5,
        backgroundColor: CoresStyle.White,
    },
    hr:{
        borderBottomColor: 'black',
        borderBottomWidth: .5,
    },
    CategUi:{
        marginTop:5,
        marginRight:0,
        marginLeft:15,
        marginBottom:5,
    },
})
export default EnderecoContato