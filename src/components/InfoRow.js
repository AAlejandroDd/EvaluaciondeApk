import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../themes/colors';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { paddingVertical: 12, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.muted },
  label: { color: colors.muted, fontSize: 13, marginBottom: 2 },
  value: { color: colors.text, fontSize: 18, fontWeight: '600' },
});
