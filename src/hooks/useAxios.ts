import { useState, useEffect } from 'react';

const useAxios = <T>(fetchFunc: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const fetchedData = await fetchFunc();
      setData(fetchedData);
    } catch (error) {
      if (typeof error === 'string') {
        setError(error);
      }
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading, open, setOpen };
};

export default useAxios;
