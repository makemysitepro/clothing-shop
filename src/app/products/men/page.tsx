import { generateMetadata as generateSEOMetadata } from '@/seo/metadata';
import ProductCard from '@/components/ui/ProductCard';
import { FEATURED_PRODUCTS } from '@/constants';
import { generateProductListSchema } from '@/schemas/product';

export const metadata = generateSEOMetadata({
  title: 'Men\'s Clothing',
  description: 'Shop the latest men\'s fashion collection. T-shirts, jeans, shirts, and more at great prices.',
});

export default function MenProductsPage() {
  const menProducts = FEATURED_PRODUCTS.filter(p => p.category === 'men');
  const productSchema = generateProductListSchema(menProducts);

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
              Men&apos;s Clothing
            </h1>
            <p className="text-xl text-slate-600">
              Discover our collection of stylish and comfortable clothing for men
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {menProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No products available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
