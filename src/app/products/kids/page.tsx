import { generateMetadata as generateSEOMetadata } from '@/seo/metadata';
import ProductCard from '@/components/ui/ProductCard';
import { FEATURED_PRODUCTS } from '@/constants';
import { generateProductListSchema } from '@/schemas/product';

export const metadata = generateSEOMetadata({
  title: 'Kids Clothing',
  description: 'Shop the latest kids fashion collection. Comfortable and fun clothing for children of all ages.',
});

export default function KidsProductsPage() {
  const kidsProducts = FEATURED_PRODUCTS.filter(p => p.category === 'kids');
  const productSchema = generateProductListSchema(kidsProducts);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">
              Kids Clothing
            </h1>
            <p className="text-xl text-slate-600">
              Discover our collection of fun and comfortable clothing for kids
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kidsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {kidsProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No products available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
