import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 24
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 14
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    marginRight: 12,
    color: '#fdfcfe'
  },
  inputFocus: {
    borderColor: "#5e60ce"
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1e6f9f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -52,
    marginBottom: 25
  },
  formLabels: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  formLabelsCentered: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "flex-start"
  },
  tasksLabelCreated: {
    color: '#4ea8de',
    fontWeight: "bold"
  },
  tasksLabelNumber: {
    color: '#fff',
    backgroundColor: "#333",
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 6,
    marginTop: -2
  },
  tasksLabelDone: {
    color: '#8284fa',
    fontWeight: "bold"
  },
  listEmpty: {
    alignItems: "center",
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 15,
    paddingTop: 60,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  listEmptyTextStrong: {
    fontWeight: "bold",
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 25
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 25
  }
});