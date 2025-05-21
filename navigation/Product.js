import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import Card from '../components/card';
import {db} from '../controller.js';
import {collection, getDocs} from 'firebase/firestore';
import { useCarrinho } from '../components/ProviderCart.js';

export default function Product({navigation}){
    const [produtos, setProdutos] = useState([]);
    const {adicionarProduto} = useCarrinho();

    useEffect(() => {
        async function carregarProdutos(){
            try{
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({ id: doc.id, ...doc.data() });
                });
                setProdutos(lista);
            }
            catch (error) {
                console.log("Erro ao carregar produtos:", error);
            }
        }
        carregarProdutos();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Produtos</Text>
            <FlatList
                data={produtos}  bota o array q quer percorrer aq 
                renderItem={({ item }) => (
                    <Card
                    nome={item.nome}
                    valor={item.valor}
                    imagem={item.imagem}
                    comprar={() => {
                        adicionarProduto(item);
                        navigation.navigate('Carrinho');
                    }}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize:30,
        color: '#333390',
    },
})



{/* ARRAY/LISTA COM MAP */}
            {/* {produtos.map((item) => (
                <Text style={styles.txtprod}>
                    {item.nome} - R$ {item.valor}
                </Text>
            ))} */}

            {/* {ARRAY COM FLATLIST QUE NÃO CARREGA O Q N TIVER MOSTRANDO} */}