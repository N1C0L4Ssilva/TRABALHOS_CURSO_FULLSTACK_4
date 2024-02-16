import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import CardLista from "../../../Components/CardList";
import Estilo from "./Estilo"
import NavBar from "../../../Components/NavBar";
const ListaFornecedor = () => {
    return(
    <View style={Estilo.container}>
        <NavBar></NavBar>
        <View style={Estilo.main}>
            <CardLista
                Nome="TESTE NOME"
                Desc="TESTE DESCRIÇÃO"
                Imag="https://reactnative.dev/img/tiny_logo.png"
            ></CardLista>
            <CardLista
                Nome="TESTE NOME"
                Desc="TESTE DESCRIÇÃO"
                Imag="https://reactnative.dev/img/tiny_logo.png"
            ></CardLista>
            <CardLista
                Nome="TESTE NOME"
                Desc="TESTE DESCRIÇÃO"
                Imag="https://reactnative.dev/img/tiny_logo.png"
            ></CardLista>
        </View>
    </View>)
}
export default ListaFornecedor;