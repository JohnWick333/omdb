import React, { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [omdbUrl, setUrl] = useState<string>(url)
  const [data, setData] = useState<any | null | undefined>(null);
  useEffect(function (): any {
    let isSubscribed = true;
    fetch(omdbUrl).then(res => {
      return res.json();
    })
      .then(res => {
        if (isSubscribed) {
          setData(res.Search);
        }
      });
    return () => isSubscribed = false;
  }, [omdbUrl])
  return [data, (url: string) => setUrl(url)];
}
export default useFetch;
