// src/hooks/useContentful.ts

import { useState, useEffect } from 'react';
import { createClient, Entry, Asset } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID!,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
});

// Hàm này nhận vào response thô từ Contentful và biến đổi nó thành một cấu trúc dữ liệu sạch,
// tự động thay thế tất cả các "Links" bằng nội dung đầy đủ của chúng.
const parseContentfulResponse = (response: any): any[] => {
  if (!response || !response.items) {
    return [];
  }

  const includesMap = new Map<string, Entry<any> | Asset>();
  if (response.includes) {
    if (response.includes.Asset) {
      for (const asset of response.includes.Asset) {
        includesMap.set(asset.sys.id, asset);
      }
    }
    if (response.includes.Entry) {
      for (const entry of response.includes.Entry) {
        includesMap.set(entry.sys.id, entry);
      }
    }
  }

  const resolveItem = (item: any): any => {
    if (!item || !item.sys) return item;

    if (item.sys.type === 'Link') {
      const fullItem = includesMap.get(item.sys.id);
      if (!fullItem) return null;
      item = fullItem;
    }

    if (item.sys.type === 'Asset' && item.fields?.file?.url) {
      return {
        id: item.sys.id,
        title: item.fields.title || '',
        image: `https:${item.fields.file.url}`,
      };
    }
    
    if (item.sys.type === 'Entry' && item.fields) {
      const resolvedFields: { [key: string]: any } = {};
      for (const key in item.fields) {
        const value = item.fields[key];
        if (Array.isArray(value)) {
          resolvedFields[key] = value.map(resolveItem).filter(Boolean);
        } else {
          resolvedFields[key] = resolveItem(value);
        }
      }
      return { id: item.sys.id, ...resolvedFields };
    }

    return item;
  };
  
  return response.items.map(resolveItem);
};


export const useContentful = <T>(contentType: string, slug?: string) => {
  const [data, setData] = useState<T | T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const queryOptions: any = {
            content_type: contentType,
            include: 10,
        };

        // Lấy response và ép kiểu thành 'any' để truy cập 'includes' một cách an toàn
        const response: any = await client.getEntries<any>(queryOptions);
        
        const parsedData = parseContentfulResponse(response);

        if (slug) {
          const singleItem = parsedData.find(item => item.slug === slug);
          setData(singleItem || null);
        } else {
          // Sửa lỗi cho trang Press: Đảm bảo trường image là string URL
          const formattedForList = parsedData.map(item => {
            if (item.image && typeof item.image === 'object' && item.image.image) {
              return { ...item, image: item.image.image };
            }
            return item;
          });
          setData(formattedForList as T[]);
        }
      } catch (e) {
        setError(e);
        console.error(`Failed to fetch and parse content type "${contentType}"`, e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [contentType, slug]);

  return { data, isLoading, error };
};