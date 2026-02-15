import Image from 'next/image';

type TestimonialCardProps = {
  name: string;
  rating: number;
  text: string;
  image: string;
};

export default function TestimonialCard({ name, rating, text, image }: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-200">
          <Image
            src={image}
            alt={name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{name}</h4>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < rating ? 'text-yellow-400' : 'text-slate-300'}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </article>
  );
}
