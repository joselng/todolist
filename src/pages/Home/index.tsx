import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, Image, Alert } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import uuid from "react-native-uuid";

import { Task } from "../../components/Task";

import { styles } from "./styles";

interface ITask {
  id: string,
  description: string,
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>();

  function addTask() {
    if (!taskDescription) {
      Alert.alert("Tarefas", "Você deve informar a tarefa que deseja adicionar.");
      return;
    }

    setTasks(prev => [...prev, { id: String(uuid.v4()), description: String(taskDescription), done: false }]);
    setTaskDescription("");
  }

  function handleTaskRemove(id: string) {
    Alert.alert("Tarefas", "Tem certeza que deseja apagar a tarefa?", [
      {
        text: "Sim",
        style: "default",
        onPress: () => {
          setTasks(prev => prev.filter(task => task.id !== id));
          return;
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  function handleTaskDone(id: string) {
    const updatedTask = tasks.find(task => task.id === id)

    if (!updatedTask) return;

    setTasks(prev => [{ ...updatedTask, done: !updatedTask.done }, ...prev.filter(task => task.id !== id)]);
    console.log(tasks)
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={setTaskDescription}
          onSubmitEditing={addTask}
          value={taskDescription}
        />

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>
            <Icon name="pluscircleo" size={20} />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formLabels}>
        <View style={styles.formLabelsCentered}>
          <Text style={styles.tasksLabelCreated}>
            Criadas
          </Text>
          <Text style={styles.tasksLabelNumber}>
            {tasks.length}
          </Text>
        </View>
        <View style={[styles.formLabelsCentered, { justifyContent: "flex-end" }]}>
          <Text style={styles.tasksLabelDone}>
            Concluídas
          </Text>
          <Text style={styles.tasksLabelNumber}>
            { tasks.filter(task => task.done === true).length }
          </Text>
        </View>
      </View>
      
      <FlatList 
        style={ tasks.length > 0 ? { marginTop: 18 } : {}} 
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            description={item.description}
            done={item.done}
            onRemove={ () => handleTaskRemove(item.id) }
            onDone={ () => handleTaskDone(item.id) }
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image style={{ marginBottom: 18 }} source={require('../../assets/clipboard.png')} />
            <Text style={styles.listEmptyTextStrong}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />

    </View>
  );
}
