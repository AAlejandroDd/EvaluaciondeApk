import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../themes/colors';

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    alignItems: 'center',
  },
  pressed: { opacity: 0.8 },
  text: { color: colors.background, fontSize: 16, fontWeight: '700' },
});
