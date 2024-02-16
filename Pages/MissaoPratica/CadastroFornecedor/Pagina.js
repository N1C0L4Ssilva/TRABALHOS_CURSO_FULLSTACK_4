import React from "react";
import {View,TouchableOpacity,Text, TextInput, FlatList, Button, VirtualizedList} from "react-native";
import Estilo from "./Estilo"
import NavBar from "../../../Components/NavBar";
import EnderecoContato from "../../../Components/EndrCtt";
const CadastroFornecedor = () => {
    CategoriaLista=[
        "CATEGORIA 1",
        "CATEGORIA 2",
        "CATEGORIA 3"
    ]
    ContatoLista=[
        "[Telefone para contato]",
        "[##] # ####-####"
    ]
    EnderecosCadastrados=[
        {
            Rua:"[RUA]",
            Numero:"[NUMERO]",
            Bairro:"[BAIRRO]",
            Cidade:"[CIDADE]",
            UF:"[UF]",
            TelefonesCadastro:[
                "[Telefone de Contato]",
                "[##] # ####-####",
            ]
        }
    ]
    return(
    <View style={Estilo.container}>
        <NavBar></NavBar>
        <View style={Estilo.Main}>
            <TextInput style={[Estilo.Input,{height:25}]} placeholder="NOME"></TextInput>
            <TextInput style={[Estilo.Input,{height:55}]} placeholder="DESCRIÇÃO"></TextInput>
            <TextInput style={[Estilo.Input,{height:25}]} placeholder="IMAGEM"></TextInput>
            <View style={Estilo.MainDiv}>
                <View style={Estilo.CategDiv}>
                    <TextInput style={Estilo.CategInput} placeholder="CATEGORIA"></TextInput>
                    <TouchableOpacity style={Estilo.CategInputButton}>
                        <Text style={Estilo.Centralizar}>+</Text>
                    </TouchableOpacity>
                </View>
                <VirtualizedList style={Estilo.CategUi} data={CategoriaLista}
                    renderItem={({item}) => <Text style={Estilo.CategLi}>{item}</Text>}
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
                <View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <TextInput style={[Estilo.Input,{
                            height:25,
                            width: '73.5%',
                            marginRight:5,
                            fontSize: 10
                            }]}
                            placeholder="ENDEREÇO"></TextInput>
                        <TextInput style={[Estilo.Input,{
                            height:25,
                            width: '25%',
                            marginRight:5,
                            fontSize: 10
                            }]}
                            placeholder="NUMERO"></TextInput>
                    </View>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput style={[Estilo.Input,{
                            height:25,
                            width: '32.3%',
                            marginRight:5,
                            fontSize: 10
                            }]}
                            placeholder="BAIRRO"></TextInput>
                        <TextInput style={[Estilo.Input,{
                            height:25,
                            width: '32.3%',
                            marginRight:5,
                            fontSize: 10
                            }]}
                            placeholder="CIDADE"></TextInput>
                        <TextInput style={[Estilo.Input,{
                            height:25,
                            width: '32.3%',
                            marginRight:5,
                            fontSize: 10
                            }]}
                            placeholder="UF"></TextInput>
                    </View>
                </View>
                <View style={Estilo.hr}/>
                
                <View style={Estilo.CategDiv}>
                    <TextInput style={Estilo.CategInput} placeholder="CATEGORIA"></TextInput>
                    <TouchableOpacity style={Estilo.CategInputButton}>
                        <Text style={Estilo.Centralizar}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList style={Estilo.CategUi} data={CategoriaLista}
                    renderItem={({item}) => <Text style={Estilo.CategLi}>{item}</Text>}
                ></FlatList>
                <Button title="ADICIONAR OUTRO ENDEREÇO"></Button>
            </View>
        </View>
    </View>)
}
export default CadastroFornecedor;