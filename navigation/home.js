import { Text, View, StyleSheet, Image, Button, ImageBackground, TextInput } from 'react-native';
import ImagemFundo from '../Imgs/gato.jpg';


export default function Sec1() {
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex:1, width:'100%', height:'100%', padding: 40, justifyContent: 'space-between'}} source={ImagemFundo}>
        <Text style={[styles.title, styles.textCenter]}>ALICE IN WONDERLAND</Text>
        <Text style={[styles.text, styles.textCenter]}>
          Já pensou como seria um jogo dark sobre algum conto de fada? Se sim, você se animará com o novo projeto "Alice in Wonderland" que estamos desenvolvendo. Se trata de um jogo de Alice no país das maravilhas em mundo que se fantasia de alegre para esconder uma verdade sombria.
        </Text>

        <View style={styles.imgContainerEvenly}>
          <Image 
            style={styles.img} 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBFB8jK64qjENZ2iOHmhv5HSbw22KCVBg4Q&s'}} 
          />
          <Image 
            style={styles.img} 
            source={{ uri: 'https://grupoautentica.f1cdn.com.br/view/1080/1080/false/true/208.jpg?MjA4LQ=='}} 
          />
        </View>

        <View style={styles.imgContainerEvenly}>
          <Image 
            style={styles.img} 
            source={{ uri: 'https://s2.glbimg.com/b9BIOshcT7nqYbj_R2MWYKyUsA4=/e.glbimg.com/og/ed/f/original/2017/07/04/alice-in-wonderland.jpg'}} 
          />
          <Image 
            style={styles.img} 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETISDeiR6LJ8_OoCNRjHMUJALWM9HYVHsZg&s'}} 
          />
        </View>

        <Text style={[styles.text, styles.textCenter]}>
          Atualmente o Projeto ainda está em desenvolvimento, mas faça login na nossa página para receber notícias sobre o projeto da forma mais rápida!
        </Text>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 30,
    paddingTop: 70,
  },
  title: {
    fontSize: 35,
    color: 'white',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  textCenter: {
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  img: {
    width: 130,
    height: 130,
  },
  imgContainerEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
