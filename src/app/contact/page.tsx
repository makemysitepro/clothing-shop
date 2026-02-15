import { generateMetadata as generateSEOMetadata } from '@/seo/metadata';
import ContactForm from '@/components/sections/ContactForm';
import { SITE_CONFIG } from '@/constants';

export const metadata = generateSEOMetadata({
  title: 'Contact Us',
  description: 'Get in touch with StyleHub. Visit our store, call us, or send us a message.',
});

export default function ContactPage() {
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I would like to know more about your products`;

  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We would love to hear from you. Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Store Address</h3>
                  <p className="text-slate-600">{SITE_CONFIG.address}</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Phone</h3>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-slate-900 hover:text-slate-700 text-lg">
                    {SITE_CONFIG.phone}
                  </a>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Email</h3>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-900 hover:text-slate-700 text-lg">
                    {SITE_CONFIG.email}
                  </a>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">WhatsApp</h3>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 text-lg font-medium"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">Business Hours</h3>
                  <p className="text-slate-600">{SITE_CONFIG.businessHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
