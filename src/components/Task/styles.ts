import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#262626',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#333"
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskDescription: {
    flex: 1,
    fontSize: 14,
    color: '#ccc',
    lineHeight: 25
  },
  buttonDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32
  },
});