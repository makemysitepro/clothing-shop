import { generateMetadata as generateSEOMetadata } from '@/seo/metadata';
import { SITE_CONFIG } from '@/constants';

export const metadata = generateSEOMetadata({
  title: 'About Us',
  description: 'Learn more about StyleHub - your trusted fashion destination for quality clothing',
});

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            About {SITE_CONFIG.name}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-6">
              Welcome to {SITE_CONFIG.name}, your premier destination for quality clothing and fashion.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded with a passion for fashion and a commitment to quality, {SITE_CONFIG.name} has been serving 
              customers with the latest trends and timeless classics. We believe that everyone deserves to look 
              and feel their best, which is why we offer a wide range of clothing for men, women, and kids.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Our Mission</h2>
            <p className="text-slate-600 mb-4">
              Our mission is to provide high-quality, fashionable clothing at affordable prices. We carefully 
              curate our collection to ensure that every piece meets our standards of quality, style, and value.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-4">
              <li>Premium quality fabrics and materials</li>
              <li>Latest fashion trends and timeless classics</li>
              <li>Affordable prices without compromising quality</li>
              <li>Wide range of sizes and styles</li>
              <li>Excellent customer service</li>
              <li>Easy returns and exchanges</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Visit Our Store</h2>
            <p className="text-slate-600 mb-4">
              We invite you to visit our store and experience our collection firsthand. Our friendly staff 
              is always ready to help you find the perfect outfit for any occasion.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>Address:</strong> {SITE_CONFIG.address}</p>
                <p><strong>Phone:</strong> <a href={`tel:${SITE_CONFIG.phone}`} className="text-slate-900 hover:underline">{SITE_CONFIG.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-900 hover:underline">{SITE_CONFIG.email}</a></p>
                <p><strong>Hours:</strong> {SITE_CONFIG.businessHours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
