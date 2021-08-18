import { useEffect, useState } from 'react';

export const useFetch = (url, methodOptions) => {
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUrl = async () => {
    try {
      const response = await fetch(url, methodOptions);

      if (!response.ok) {
        throw new Error(response.status);
      }

      const json = await response.json();
      setResponseData(json);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return [responseData, loading, error];
};
