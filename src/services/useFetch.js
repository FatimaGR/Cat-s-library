import { useState, useEffect } from 'react'

export function useFetch(request, options = {}){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://cats-library.onrender.com/api" + request, {
      method: options.method || "GET",
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: options.body ? JSON.stringify(options.body) : null
    })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, [request, options]);

  return {data, loading, error};
}