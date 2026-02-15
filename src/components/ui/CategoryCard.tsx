import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  slug: string;
  image: string;
};

export default function CategoryCard({ name, slug, image }: CategoryCardProps) {
  return (
    <Link href={`/products/${slug}`} className="group">
      <article className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-2xl font-bold mb-2">{name}</h3>
          <span className="text-white text-sm font-medium group-hover:underline">
            Shop Now →
          </span>
        </div>
      </article>
    </Link>
  );
}
