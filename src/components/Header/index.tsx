import { View, Image } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={{ marginBottom: 20 }} source={require('../../assets/logo.png')} />
    </View>
  );
}
