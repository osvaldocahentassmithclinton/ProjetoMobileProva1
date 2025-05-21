import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useCarrinho} from '../components/ProviderCart.js';

export default function Carrinho(){
    const {carrinho} = useCarrinho();
    return(
        <View>
            <Text> Carrinho </Text>
            <FlatList data={carrinho} 
            renderItem={({item}) =>(
                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: item.imagem}}/>
                    <View>
                        <Text>{item.nome}</Text>
                        <Text>{item.valor}</Text> 
                    </View>
                </View>
            )}
            />
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
        height: 120,
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