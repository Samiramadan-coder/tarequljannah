export type Category = {
  description: string;
  icon: null | string;
  id: number;
  image: null | string;
  meta_description: string;
  meta_title: string;
  name: string;
  parent_id: null | number;
  slug: string;
};

export type Instructor = {
  id: number;
  name: string;
  slug: string;
  short_bio: string;
  bio: string;
  title: string;
  avatar: null | string;
  specializations: string[];
  languages: string[];
  certifications: null | string[];
  total_courses: number;
  total_students: number;
  rating: string;
  rating_count: number;
  social_links: {
    facebook: string;
  };
  meta_title: string;
  meta_description: string;
};

export type Course = {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  thumbnail: null | string;
  cover_image: null | string;
  preview_video_url: null | string;
  price: number;
  sale_price: number;
  currency: null | string;
  is_free: boolean;
  level: string;
  language: null | string;
  duration_hours: number;
  rating: null | number;
  rating_count: null | number;
  total_students: null | number;
  total_lessons: null | number;
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  instructor: Instructor;
  categories: Category[];
};
