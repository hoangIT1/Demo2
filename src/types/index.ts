// src/types/index.ts

export interface BlogPost {
  id: string | number; // ID có thể là số (từ file tĩnh) hoặc chuỗi (từ Contentful)
  title: string;
  snippet: string;
  author: string;
  avatar: string;
  date: string;
  readTime: string;
  image: string;
  content?: string; // content có thể không có ở trang danh sách, nên ta thêm `?` để nó là tùy chọn (optional)
}