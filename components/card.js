import {View, Text, StyleSheet, Image} from 'react-native';

export default function Card({nome,valor,imagem}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={imagem}/>
            <View>
                <Text>{nome}</Text>
                <Text>{valor}</Text> 
            </View>
                   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    card:{
        padding:10,
        margin: 10,
        backgroundColor: '#202099',
        borderRadius:8,
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 250,
        height: 80,
    },
    text:{
        fontSize:30,
        color: '#333390',
    },
    txtprod:{
        fontSize: 20,
    },
    img:{
        width: 50,
        height: 50,
    }
})