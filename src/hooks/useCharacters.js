import { useCallback, useEffect, useRef, useState } from 'react';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const nextUrl = useRef(BASE_URL);
  const busy = useRef(false);

  const fetchPage = useCallback(async (reset = false) => {
    if (busy.current) return;
    const url = reset ? BASE_URL : nextUrl.current;
    if (!url) return;

    busy.current = true;
    try {
      setError(null);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const data = await res.json();
      nextUrl.current = data.info?.next ?? null;
      setCharacters((prev) => (reset ? data.results : [...prev, ...data.results]));
    } catch (e) {
      setError('No se pudo cargar la información. Revisa tu conexión e intenta de nuevo.');
    } finally {
      busy.current = false;
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPage(true);
  }, [fetchPage]);

  const loadMore = useCallback(() => {
    if (!nextUrl.current || busy.current) return;
    setLoadingMore(true);
    fetchPage(false);
  }, [fetchPage]);

  const refresh = useCallback(() => {
    setRefreshing(true);
    fetchPage(true);
  }, [fetchPage]);

  const retry = useCallback(() => {
    setLoading(true);
    fetchPage(true);
  }, [fetchPage]);

  return { characters, loading, loadingMore, refreshing, error, loadMore, refresh, retry };
}
