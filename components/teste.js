import { Text, View, StyleSheet, Image } from 'react-native';




export default function Sec3() {
  return (
    <View style={styles.container}>



      {/* Primeiro texto à esquerda */}
      <Text style={[styles.text, styles.textLeft]}>Hamsters e Perus tem certas semelhanças se analisarmos o REFICOFAGE, como por exemplo o reino e o filo. a seguir a imagem de um hamster e de um Peru:</Text>



      {/* Primeira Seção de Imagens */}
      <View style={styles.imgContainerEvenly}>
        <Image 
          style={styles.img} 
          source={{ uri:'https://plattspets.co.uk/cdn/shop/articles/facts_about_hamsters.png?v=1710926965'}} 
        />
        <Image 
        style={styles.img} 
        source={{ uri:'https://pm1.aminoapps.com/6414/3937a2d1eebca9f159c7a57f4d03341c518d15f2_00.jpg'}}
        />
      </View>



      {/* Segundo texto à direita */}
      <Text style={[styles.text, styles.textRight]}>Além disso, por mais que o Goku seja mamífero e tenha várias características parecidas com as de um humano, ele é um sayajin, portanto ele tem características evolutivas que se diferem das dos humanos, então por mais que humanos tenham pelo menos o reino e o filo em comum com animais como cachorros, o Goku por ser de outro planeta se difere em algumas questões, podendo até se encaixar em outro Filo evolutivo. A seguir imagens de um cachorro e do Goku ssj infinito:</Text>



      {/* Segunda Seção de Imagens */}
      <View style={styles.imgContainerAround}>
        <Image 
          style={styles.img} 
          source={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOoFmynTCy-B35L252_RTExCbUdHO76QyzA&s'}} 
        />
        <Image 
          style={styles.img} 
          source={require('../Imgs/ssj.webp')} 
        />
      </View>

        {/* Terceiro texto no meio */}
        <Text style={styles.textCenter}>Créditos: Augusto Custódio Silva e somente ele.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 70,
  },
  text: {
    fontSize: 16,
  },
  textLeft: {
    alignSelf: 'flex-start',
  },
  textRight: {
    alignSelf: 'flex-end',
  },
  textCenter:{
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  imgContainerEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imgContainerAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
