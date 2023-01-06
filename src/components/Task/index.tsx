import { Text, View, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from "react-native-vector-icons/AntDesign"

import { styles } from "./styles";

type TaskProps = {
  description: string;
  done: boolean;
  onDone: () => void;
  onRemove: () => void;
};

export function Task({ description, done, onDone, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerButton}>
        <BouncyCheckbox
          size={20}
          fillColor="#5e60ce"
          iconStyle={{ borderColor: "#5e60ce" }}
          innerIconStyle={{ borderWidth: 1 }}
          onPress={onDone}
          isChecked={done}
        />
        <Text style={ done === true ? [styles.taskDescription, { textDecorationLine: "line-through", color: "#606060"}] : styles.taskDescription }>{description}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
        <Icon name="delete" size={15} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
