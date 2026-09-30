import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useCharacters from '../hooks/useCharacters';
import { colors } from '../themes/colors';

export default function CharactersScreen() {
  const { characters, loading, loadingMore, refreshing, error, loadMore, refresh, retry } =
    useCharacters();

  if (loading) return <Loading message="Cargando personajes..." />;
  if (error && characters.length === 0) return <ErrorMessage message={error} onRetry={retry} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CharacterCard character={item} />}
        contentContainerStyle={styles.list}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={refresh}
        ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.primary} style={styles.footer} /> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  footer: { marginVertical: 16 },
});
