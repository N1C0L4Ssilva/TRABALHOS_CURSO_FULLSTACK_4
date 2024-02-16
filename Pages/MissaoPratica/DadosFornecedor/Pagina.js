import React from "react"
import {View,Text,Image, TouchableOpacity, FlatList, VirtualizedList} from "react-native"
import Estilo from "./Estilo"
import EnderecoContato from "../../../Components/EndrCtt"
import NavBar from "../../../Components/NavBar"

const DadosFornecedor = () => {
    CategoriaLista=[
        "CATEGORIA 1",
        "CATEGORIA 2",
        "CATEGORIA 3"
    ]
    ContatoLista=[
        "[Telefone para contato]",
        "[##] # ####-####"
    ]
    return(
    <View style={Estilo.container}>
        <NavBar></NavBar>
        <View style={Estilo.main}>
            <View style={[Estilo.MainDiv, Estilo.Img_Nome]}>
                <Image style={Estilo.Img_Nome_Imagem}/>
                <View style={Estilo.Img_Nome_Div}>
                    <Text style={Estilo.Img_Nome_Div_Nome}>NOME</Text>
                    <Text style={Estilo.Img_Nome_Div_Descricao}>DESCRIÇÃO</Text>
                </View>
            </View>
            <View style={Estilo.MainDiv}>
                <Text style={Estilo.CategSpan}>CATEGORIA LIST</Text>
                <VirtualizedList style={Estilo.CategUi} data={CategoriaLista}
                    renderItem={({item}) => <Text>{item}</Text>}
                    getItemCount={()=>CategoriaLista.length}
                    keyExtractor={item => item}
                    getItem={(dados, index) => dados[index]}
                ></VirtualizedList>
            </View>
            <View style={Estilo.MainDiv}>
                <Text style={Estilo.CategSpan}>ENDEREÇO/CONTATO LIST</Text>
                <EnderecoContato
                    Rua="RUA TESTE"
                    Numero="0"
                    Bairro="BAIRRO"
                    Cidade="CIDADE"
                    Uf="ZZ"
                    Telefones={[
                        "[00] 1 2345-6789",
                        "[##] # 9999-8888"
                ]}/>
            </View>
        </View>
    </View>)
}
export default DadosFornecedor

/*

*/