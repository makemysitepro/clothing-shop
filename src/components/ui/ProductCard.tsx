import Image from 'next/image';
import { Product } from '@/types';
import { SITE_CONFIG } from '@/constants';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const whatsappMessage = `Hi, I'm interested in *${product.name}*\nPrice: ₹${product.price}\nCategory: ${product.category}`;
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group">
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              {discount}% OFF
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-slate-900 mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-slate-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            {product.colors.slice(0, 4).map((color) => (
              <div
                key={color.name}
                className="w-6 h-6 rounded-full border-2 border-slate-300"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-slate-500">+{product.colors.length - 4}</span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </article>
    </a>
  );
}
