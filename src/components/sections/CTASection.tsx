import Link from 'next/link';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/constants';

export default function CTASection() {
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in your clothing collection`;

  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Wardrobe?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Visit our store or contact us today to explore our latest collection
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
              WhatsApp Us
            </Button>
          </a>
          <a href={`tel:${SITE_CONFIG.phone}`}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
