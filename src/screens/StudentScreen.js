import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import useStudent from '../hooks/useStudents';
import { colors } from '../themes/colors';

export default function StudentScreen({ navigation }) {
  const { fields } = useStudent();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos del estudiante</Text>
      <Card style={styles.card}>
        {fields.map((f) => (
          <InfoRow key={f.label} label={f.label} value={f.value} />
        ))}
      </Card>
      <PrimaryButton title="Ver personajes" onPress={() => navigation.navigate('Characters')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', gap: 24 },
  title: { color: colors.text, fontSize: 26, fontWeight: '800' },
  card: { paddingHorizontal: 18, paddingVertical: 6 },
});
