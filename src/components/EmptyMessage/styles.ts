import { StyleSheet } from 'react-native'

import { theme } from '../../styles/themes'

export const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spaces[5],
    paddingTop: theme.spaces[12],
    borderTopWidth: 1,
    borderTopColor: theme.colors.base400,
    marginHorizontal: theme.spaces[6],
  },
  emptyTitle: {
    fontFamily: theme.fonts.primary.bold,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.base300,
    marginTop: theme.spaces[4],
    lineHeight: theme.lineHeights.base,
  },
  emptyText: {
    fontFamily: theme.fonts.primary.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.base300,
    lineHeight: theme.lineHeights.base,
  },
})
