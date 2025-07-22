// src/hooks/useContentful.ts

import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

// --- Cấu hình client (giữ nguyên) ---
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID!,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
});

export const useContentful = <T>(contentType: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Bỏ <T> ở đây để tránh warning
        const response = await client.getEntries({ content_type: contentType });

        const formattedData = response.items.map(item => {
          const fields = item.fields as any;
          if (fields.image && fields.image.fields) {
            fields.image = `https:${fields.image.fields.file.url}`;
          }
          return {
            ...(fields as object),
            id: item.sys.id,
          };
        }) as T[]; // Ép kiểu cho mảng kết quả cuối cùng

        setData(formattedData);
      } catch (e) {
        setError(e);
        console.error(`Failed to fetch content type "${contentType}"`, e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [contentType]);

  return { data, isLoading, error };
};