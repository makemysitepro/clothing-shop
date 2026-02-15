export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  inStock: boolean;
  sizes: Size[];
  colors: Color[];
};

export type ProductCategory = 
  | 'men'
  | 'women'
  | 'kids'
  | 'accessories';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Color = {
  name: string;
  hex: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type SEOMetadata = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
};
