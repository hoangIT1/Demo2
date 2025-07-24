// src/types/index.ts
import type { Asset, EntryFieldTypes, EntrySkeletonType } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

// BlogPost & ImageSliderItem giữ nguyên
export interface BlogPost {
  id: string | number;
  title: string;
  snippet: string;
  author: string;
  avatar: string;
  date: string;
  readTime: string;
  image: string;
  content?: Document | string;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<{
  title: EntryFieldTypes.Symbol;
  snippet: EntryFieldTypes.Text;
  author: EntryFieldTypes.Symbol;
  avatar: EntryFieldTypes.Symbol;
  date: EntryFieldTypes.Date;
  readTime: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
}>;

export interface ImageSliderItem {
  id: string;
  title: string;
  image: string;
}

export type TypeImageSliderSkeleton = EntrySkeletonType<{
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
}>;


// ======================= BẮT ĐẦU PHẦN MỚI =======================

export interface HomepageContent {
  pageTitle: string;
  slug: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;

  // Image Slider - Kiểu dữ liệu đã được format
  imageSliderSlides: ImageSliderItem[];

  // Who We Are & Initiatives Section
  whoWeAreTitle: string;
  whoWeAreParagraph: string;
  ourInitiativesTitle: string;
  ourInitiativesParagraph: string;
  fullWidthImage: ImageSliderItem | null; // Có thể null nếu không có ảnh
  
  // What Drives Us Section
  whatDrivesUsTitle: string;
  whatDrivesUsParagraph: string;

  // Two Columns Section
  runForMenTitle: string;
  runForMenParagraph: string;
  runForMenImages: ImageSliderItem[];
  
  creatingOpportunitiesTitle: string;
  creatingOpportunitiesParagraph: string;
  creatingOpportunitiesImage: ImageSliderItem | null; // Có thể null

  // Split Section
  splitSectionTitle: string;
  splitSectionParagraphs: string[];
  splitSectionImage: ImageSliderItem | null; // Có thể null
}

// Skeleton cho Contentful vẫn giữ nguyên để hook biết cách query
export type TypeHomepageSkeleton = EntrySkeletonType<{
  pageTitle: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  heroTitle: EntryFieldTypes.Symbol;
  heroSubtitle: EntryFieldTypes.Symbol;
  imageSliderSlides: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  whoWeAreTitle: EntryFieldTypes.Symbol;
  whoWeAreParagraph: EntryFieldTypes.Text;
  ourInitiativesTitle: EntryFieldTypes.Symbol;
  ourInitiativesParagraph: EntryFieldTypes.Text;
  fullWidthImage: EntryFieldTypes.AssetLink;
  whatDrivesUsTitle: EntryFieldTypes.Symbol;
  whatDrivesUsParagraph: EntryFieldTypes.Text;
  runForMenTitle: EntryFieldTypes.Symbol;
  runForMenParagraph: EntryFieldTypes.Text;
  runForMenImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  creatingOpportunitiesTitle: EntryFieldTypes.Symbol;
  creatingOpportunitiesParagraph: EntryFieldTypes.Text;
  creatingOpportunitiesImage: EntryFieldTypes.AssetLink;
  splitSectionTitle: EntryFieldTypes.Symbol;
  splitSectionParagraphs: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  splitSectionImage: EntryFieldTypes.AssetLink;
}>;

// ======================= KẾT THÚC PHẦN HOMME PAGE =======================

// ======================= BẮT ĐẦU PHẦN MỚI CHO MARK ANTHONY =======================

// --- Model cho một cặp nội dung/ảnh ---

// Kiểu dữ liệu đã được format để component sử dụng
export interface MarkAnthonyContentRow {
  id: string;
  sectionTitle: string;
  miniSectionTitle?: string; // Optional
  text: string;
  image: ImageSliderItem | null;
}

// Skeleton cho Contentful
export type TypeMarkAnthonyContentRowSkeleton = EntrySkeletonType<{
  sectionTitle: EntryFieldTypes.Symbol;
  miniSectionTitle: EntryFieldTypes.Symbol;
  text: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
}>;


// --- Model cho toàn bộ trang Mark Anthony ---

// Kiểu dữ liệu đã được format để component sử dụng
export interface MarkAnthonyPageContent {
  pageTitle: string;
  slug: string;
  mainTitle: string;
  subtitle: string;
  mainContentTitle: string; // Tiêu đề chung cho 4 đoạn văn
  contentRows: MarkAnthonyContentRow[];
  bottomGallery: ImageSliderItem[];
}

// Skeleton cho Contentful
export type TypeMarkAnthonyPageSkeleton = EntrySkeletonType<{
  pageTitle: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  mainTitle: EntryFieldTypes.Symbol;
  subtitle: EntryFieldTypes.Symbol;
  mainContentTitle: EntryFieldTypes.Symbol;
  // Trường này sẽ liên kết đến nhiều entry của model MarkAnthonyContentRow
  contentRows: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMarkAnthonyContentRowSkeleton>>;
  bottomGallery: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}>;

// ======================= KẾT THÚC PHẦN MỚI =======================

// ======================= BẮT ĐẦU PHẦN MỚI CHO COMPETITION =======================

// Kiểu dữ liệu đã được format để component sử dụng
export interface CompetitionPageContent {
  pageTitle: string;
  slug: string;
  mainTitle: string;
  subTitle: string;
  introParagraph: string;
  eventDate: string;
  highlightText1: string;
  highlightText2: string;
  presentedByImage: ImageSliderItem | null;
  eventsTitle1: string;
  eventsTitle2: string;
  eventsSubtitle: string;
  image1: ImageSliderItem | null;
  image2: ImageSliderItem | null;
  sponsorsTitle: string;
  sponsorImages: ImageSliderItem[];
  supportByTitle: string;
  supportByImages: ImageSliderItem[];
}

// Skeleton cho Contentful
export type TypeCompetitionPageSkeleton = EntrySkeletonType<{
  pageTitle: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  mainTitle: EntryFieldTypes.Symbol;
  subTitle: EntryFieldTypes.Symbol;
  introParagraph: EntryFieldTypes.Text;
  eventDate: EntryFieldTypes.Symbol;
  highlightText1: EntryFieldTypes.Symbol;
  highlightText2: EntryFieldTypes.Symbol;
  presentedByImage: EntryFieldTypes.AssetLink;
  eventsTitle1: EntryFieldTypes.Symbol;
  eventsTitle2: EntryFieldTypes.Symbol;
  eventsSubtitle: EntryFieldTypes.Symbol;
  image1: EntryFieldTypes.AssetLink;
  image2: EntryFieldTypes.AssetLink;
  sponsorsTitle: EntryFieldTypes.Symbol;
  sponsorImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  supportByTitle: EntryFieldTypes.Symbol;
  supportByImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}>;

// ======================= KẾT THÚC PHẦN MỚI =======================

// ======================= BẮT ĐẦU PHẦN MỚI CHO NATIONAL DIRECTORS =======================

// Kiểu dữ liệu đã được format để component sử dụng
export interface NationalDirectorsPageContent {
  pageTitle: string;
  slug: string;
  mainTitle: string;
  // Các đoạn văn bản sẽ được quản lý dưới dạng một danh sách
  introParagraphs: string[];
  emailAddress: string;
  signature: string;
  organizationName: string;
  // Danh sách các giám đốc
  directors: ImageSliderItem[];
}

// Skeleton cho Contentful
export type TypeNationalDirectorsPageSkeleton = EntrySkeletonType<{
  pageTitle: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  mainTitle: EntryFieldTypes.Symbol;
  introParagraphs: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  emailAddress: EntryFieldTypes.Symbol;
  signature: EntryFieldTypes.Symbol;
  organizationName: EntryFieldTypes.Symbol;
  directors: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}>;

// ======================= KẾT THÚC PHẦN MỚI =======================


// ======================= BẮT ĐẦU PHẦN MỚI CHO CONTESTANTS =======================

// Kiểu dữ liệu đã được format để component sử dụng
export interface ContestantsPageContent {
  pageTitle: string;
  slug: string;
  paragraph: string;
  comingSoonText: string;
}

// Skeleton cho Contentful
export type TypeContestantsPageSkeleton = EntrySkeletonType<{
  pageTitle: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  paragraph: EntryFieldTypes.Text;
  comingSoonText: EntryFieldTypes.Symbol;
}>;

// ======================= KẾT THÚC PHẦN MỚI =======================