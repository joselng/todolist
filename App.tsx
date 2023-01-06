import { StatusBar, View, StyleSheet } from "react-native";
import { Header } from "./src/components/Header";

import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d"
  }
});
