import { StyleSheet } from 'react-native'
import { theme } from '../../styles/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base600,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: theme.colors.base700,
    paddingHorizontal: theme.spaces[6],
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spaces[1],
    marginTop: theme.spaces[10],
    transform: [{ translateY: 23 }],
  },
  input: {
    flex: 1,
    padding: theme.spaces[4],
    borderRadius: theme.radiis.md,
    backgroundColor: theme.colors.base500,
    fontSize: theme.fontSizes.md,
    lineHeight: theme.lineHeights.base,
    color: theme.colors.base100,
    fontFamily: theme.fonts.primary.regular,
  },
  button: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary600,
    borderRadius: theme.radiis.md,
  },
  infoContainer: {
    marginTop: theme.spaces[14],
    paddingHorizontal: theme.spaces[6],
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoCreated: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.primary500,
  },
  infoFinished: {
    marginLeft: 'auto',
    fontFamily: theme.fonts.primary.bold,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.secondary500,
  },
  infoNumber: {
    backgroundColor: theme.colors.base400,
    marginLeft: theme.spaces[2],
    paddingHorizontal: theme.spaces[2],
    paddingVertical: 2,
    borderRadius: 999,
  },
  infoNumberText: {
    color: theme.colors.base200,
    fontFamily: theme.fonts.primary.bold,
  },
  taskList: {
    marginTop: theme.spaces[5],
    paddingHorizontal: theme.spaces[6],
  },
})
