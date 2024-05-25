import { Text, TouchableOpacity, View } from 'react-native'

import CheckIcon from '../../assets/icons/check.svg'
import TrashIcon from '../../assets/icons/trash.svg'

import { styles } from './styles'

type TaskProps = {
  task: Task
  onToggleTask: (id: number) => void
  onRemoveTask: (id: number) => void
}

export function Task({ task, onToggleTask, onRemoveTask }: TaskProps) {
  const styleStatus = {
    taskContainerFinished: task.finished ? styles.taskContainerFinished : null,
    taskToggleButtonFinished: task.finished
      ? styles.taskToggleButtonFinished
      : null,
    taskTitleFinished: task.finished ? styles.taskTitleFinished : null,
  }

  return (
    <View style={[styles.taskContainer, styleStatus.taskContainerFinished]}>
      <TouchableOpacity
        style={[styles.taskToggleButton, styleStatus.taskToggleButtonFinished]}
        onPress={() => onToggleTask(task.id)}
      >
        {task.finished && <CheckIcon width={12} height={12} />}
      </TouchableOpacity>

      <Text style={[styles.taskTitle, styleStatus.taskTitleFinished]}>
        {task.title}
      </Text>

      <TouchableOpacity onPress={() => onRemoveTask(task.id)}>
        <TrashIcon width={16} height={16} />
      </TouchableOpacity>
    </View>
  )
}
