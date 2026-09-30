import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { colors } from '../themes/colors';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      {onRetry && <PrimaryButton title="Reintentar" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16 },
  text: { color: colors.danger, fontSize: 16, textAlign: 'center' },
});
