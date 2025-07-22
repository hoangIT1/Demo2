// src/types/index.ts
import type { Asset, EntryFieldTypes, EntrySkeletonType } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export interface BlogPost {
  id: string | number; // ID có thể là số (từ file tĩnh) hoặc chuỗi (từ Contentful)
  title: string;
  snippet: string;
  author: string;
  avatar: string;
  date: string;
  readTime: string;
  image: string;
  content?: Document; // content có thể không có ở trang danh sách, nên ta thêm `?` để nó là tùy chọn (optional)
}

// **ĐỊNH NGHĨA SKELETON CHO CONTENTFUL**
// Đây là bước quan trọng nhất để cung cấp type cho Contentful SDK
export type TypeBlogPostSkeleton = EntrySkeletonType<{
  title: EntryFieldTypes.Symbol;
  snippet: EntryFieldTypes.Text;
  author: EntryFieldTypes.Symbol;
  avatar: EntryFieldTypes.Symbol; // Giả sử avatar là một ký tự emoji hoặc text
  date: EntryFieldTypes.Date;
  readTime: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink; // Dùng cho ảnh được liên kết (Linked Asset)
  content: EntryFieldTypes.RichText;
}>;