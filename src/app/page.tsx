import Hero from '@/components/sections/Hero';
import CategoryCard from '@/components/ui/CategoryCard';
import ProductCard from '@/components/ui/ProductCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTASection from '@/components/sections/CTASection';
import { CATEGORIES, FEATURED_PRODUCTS, TESTIMONIALS } from '@/constants';

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Shop by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our wide range of clothing collections for everyone
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => {
              const categoryImages: Record<string, string> = {
                men: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&h=500&fit=crop',
                women: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=500&fit=crop',
                kids: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=500&fit=crop',
                accessories: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=500&h=500&fit=crop',
              };
              return (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  slug={category.slug}
                  image={categoryImages[category.slug] || ''}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
              Featured Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Check out our best-selling items at amazing prices
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real reviews from our happy customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                rating={testimonial.rating}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
