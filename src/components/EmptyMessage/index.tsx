import { Text, View } from 'react-native'

import ClipboardIcon from '../../assets/icons/clipboard.svg'

import { styles } from './styles'

type EmptyMessageProps = {
  title: string
  message: string
}

export function EmptyMessage({ title, message }: EmptyMessageProps) {
  return (
    <View style={styles.emptyContainer}>
      <ClipboardIcon width={56} height={56} />

      <Text style={styles.emptyTitle}>{title}</Text>
      <Text style={styles.emptyText}>{message}</Text>
    </View>
  )
}
