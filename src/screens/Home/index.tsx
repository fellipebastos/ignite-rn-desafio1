import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import PlusIcon from '../../assets/icons/plus.svg'

import { theme } from '../../styles/themes'

import { styles } from './styles'
import { EmptyMessage } from '../../components/EmptyMessage'
import { Task } from '../../components/Task'
import { useState } from 'react'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskName, setTaskName] = useState('')

  function handleAddTask() {
    if (!taskName.trim()) {
      return
    }

    const newTask: Task = {
      id: new Date().getTime(),
      title: taskName,
      finished: false,
    }

    setTasks((state) => [...state, newTask])
    setTaskName('')
  }

  function handleToggleTask(id: number) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id !== id) {
          return task
        }

        return { ...task, finished: !task.finished }
      }),
    )
  }

  function hadndleRemoveTask(id: number) {
    setTasks((state) => state.filter((task) => task.id !== id))
  }

  const tasksCreated = tasks.length
  const tasksFinished = tasks.filter((task) => task.finished).length

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.png')} alt="Logo" />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.base300}
            value={taskName}
            onChangeText={setTaskName}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <PlusIcon width={16} height={16} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoCreated}>Criadas</Text>
        <View style={styles.infoNumber}>
          <Text style={styles.infoNumberText}>{tasksCreated}</Text>
        </View>

        <Text style={styles.infoFinished}>Concluídas</Text>
        <View style={styles.infoNumber}>
          <Text style={styles.infoNumberText}>{tasksFinished}</Text>
        </View>
      </View>

      <FlatList
        style={styles.taskList}
        data={tasks}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Task
            key={item.title}
            task={item}
            onRemoveTask={hadndleRemoveTask}
            onToggleTask={handleToggleTask}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyMessage
            title="Você ainda não tem tarefas cadastradas"
            message="Crie tarefas e organize seus itens a fazer"
          />
        )}
      />
    </View>
  )
}
