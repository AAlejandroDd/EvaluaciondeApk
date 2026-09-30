import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import { colors } from '../themes/colors';

const statusLabel = { Alive: 'Vivo', Dead: 'Muerto', unknown: 'Desconocido' };

export default function CharacterCard({ character }) {
  const { name, status, species, gender, origin, image } = character;
  const statusColor = colors[status?.toLowerCase()] ?? colors.unknown;

  return (
    <Card style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.dot, { backgroundColor: statusColor }]} />
          <Text style={styles.detail}>{statusLabel[status] ?? status} - {species}</Text>
        </View>
        <Text style={styles.detail}>Género: {gender}</Text>
        <Text style={styles.detail} numberOfLines={1}>Origen: {origin?.name}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 14 },
  image: { width: 110, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'center', gap: 3 },
  name: { color: colors.text, fontSize: 17, fontWeight: '700' },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 9, height: 9, borderRadius: 5, marginRight: 6 },
  detail: { color: colors.muted, fontSize: 13 },
});
