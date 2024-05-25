import { StyleSheet } from 'react-native'
import { theme } from '../../styles/themes'

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spaces[3],
    paddingHorizontal: theme.spaces[4],
    marginBottom: theme.spaces[3],
    gap: theme.spaces[3],
    backgroundColor: theme.colors.base500,
    borderWidth: 1,
    borderColor: theme.colors.base400,
    borderRadius: theme.radiis.lg,
  },
  taskContainerFinished: {
    borderColor: theme.colors.base500,
  },
  taskToggleButton: {
    width: 24,
    height: 24,
    borderRadius: theme.radiis.full,
    borderColor: theme.colors.primary600,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskToggleButtonFinished: {
    backgroundColor: theme.colors.secondary600,
    borderColor: theme.colors.secondary600,
  },
  taskTitle: {
    fontFamily: theme.fonts.primary.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.base100,
    flex: 1,
  },
  taskTitleFinished: {
    color: theme.colors.base300,
    textDecorationLine: 'line-through',
  },
})
