import { useEffect, useState } from "react";

function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData(): Promise<any> {
      try {
        setIsLoading(true);

        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
          setIsError(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useApi;
