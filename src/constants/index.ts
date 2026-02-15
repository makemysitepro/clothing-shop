import { Product, Size } from '@/types';

export const SITE_CONFIG = {
  name: 'StyleHub',
  tagline: 'Your Fashion Destination',
  description: 'Premium quality clothing for men, women, and kids. Latest fashion trends at affordable prices.',
  phone: '+91 98765 43210',
  email: 'info@stylehub.com',
  whatsapp: '+919876543210',
  address: 'Shop No. 123, Fashion Street, Mumbai, Maharashtra 400001',
  socialMedia: {
    facebook: 'https://facebook.com/stylehub',
    instagram: 'https://instagram.com/stylehub',
    twitter: 'https://twitter.com/stylehub',
  },
  businessHours: 'Mon-Sat: 10:00 AM - 9:00 PM, Sun: 11:00 AM - 8:00 PM',
};

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Men', href: '/products/men' },
  { label: 'Women', href: '/products/women' },
  { label: 'Kids', href: '/products/kids' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CATEGORIES = [
  { id: 'men', name: 'Men', slug: 'men' },
  { id: 'women', name: 'Women', slug: 'women' },
  { id: 'kids', name: 'Kids', slug: 'kids' },
  { id: 'accessories', name: 'Accessories', slug: 'accessories' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt perfect for everyday wear',
    price: 599,
    originalPrice: 999,
    category: 'men' as const,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'] as Size[],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#001f3f' },
    ],
  },
  {
    id: '2',
    name: 'Elegant Summer Dress',
    description: 'Lightweight and stylish dress for summer occasions',
    price: 1499,
    originalPrice: 2499,
    category: 'women' as const,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop',
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'] as Size[],
    colors: [
      { name: 'Floral Pink', hex: '#FFB6C1' },
      { name: 'Sky Blue', hex: '#87CEEB' },
    ],
  },
  {
    id: '3',
    name: 'Slim Fit Jeans',
    description: 'Premium denim jeans with perfect fit',
    price: 1299,
    originalPrice: 1999,
    category: 'men' as const,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    inStock: true,
    sizes: ['M', 'L', 'XL', 'XXL'] as Size[],
    colors: [
      { name: 'Dark Blue', hex: '#00008B' },
      { name: 'Black', hex: '#000000' },
    ],
  },
  {
    id: '4',
    name: 'Kids Cartoon T-Shirt',
    description: 'Fun and colorful t-shirt for kids',
    price: 399,
    originalPrice: 699,
    category: 'kids' as const,
    image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&h=500&fit=crop',
    inStock: true,
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Red', hex: '#FF0000' },
      { name: 'Yellow', hex: '#FFFF00' },
      { name: 'Blue', hex: '#0000FF' },
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Priya Sharma',
    rating: 5,
    text: 'Amazing quality and great prices! The staff is very helpful and the collection is always updated with latest trends.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    rating: 5,
    text: 'Best clothing shop in the area. I always find what I am looking for. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Anjali Patel',
    rating: 5,
    text: 'Excellent customer service and quality products. My go-to place for all fashion needs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];
