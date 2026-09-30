import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { colors } from '../themes/colors';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  text: { color: colors.muted, fontSize: 15 },
});
