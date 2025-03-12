import Sec1, {Sec2} from "./screens/home.js";
import {View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Sec1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})