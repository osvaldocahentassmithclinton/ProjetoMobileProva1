import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native"

export default function cadastroViagens(){
return(
    <View style={styles.container}>
        <Text style = {styles.titleText}>CADASTRO DE VIAGENS</Text>
        <View>
            <Text style = {styles.text}>Destino</Text>
            <TextInput
            style = {styles.textInput}
            placeholder="Ex: Rio de Janeiro"
            />
            <Text style = {styles.text}>Ida</Text>
            <TextInput
            style = {styles.textInput}
            placeholder="Ex: 05/06/2025"
            />
            <Text style = {styles.text}>Volta</Text>
            <TextInput
            style = {styles.textInput}
            placeholder="Ex: 15/06/2025"
            />
            <Text style = {styles.text}>Preço/Pessoa</Text>
            <TextInput
            style = {styles.textInput}
            placeholder="Ex: R$500,00"
            />
            <Text style = {styles.text}>Tipo de Viagem</Text>
            <TextInput
            style = {styles.textInput}
            placeholder="Ex: Primeira Classe"
            />
            <Text style = {styles.text}>Estadia</Text>
            <TextInput
            style = {styles.textInput}
            placeholder="Ex: Incluso ou Não Incluso"
            />
        </View>
        <View style= {styles.containerButton}>
            <TouchableOpacity style = {styles.cadastrarButton}>
                <Text style = {styles.textButton}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
            
    </View>

);

    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'space-around',
    },
    titleText:{
        color:'black',
        fontWeight:'bold',
        fontSize:44,
        textAlign:'center'
    },
    textInput:{
        borderWidth: 1,
        borderColor: 'black', 
        borderRadius: 8,
        padding: 8,
        marginBottom: 15,
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:4
    },
    cadastrarButton:{
        borderWidth: 2,
        borderColor: 'black', 
        borderRadius: 8,
        padding: 8,
        marginBottom: 10,
        width:'45%',
        height:50,
        justifyContent:'center',
        backgroundColor:'black',
    },
    textButton:{
        textAlign:'center',
        fontWeight:'350',
        color:'white'
    },
    containerButton:{
        alignItems:'center'
    }

})