import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, size = 15, className }: StarRatingProps) {
  const clamped = Math.min(Math.max(rating, 0), 5);

  return (
    <div className={`flex items-center gap-0.5 ${className ?? ""}`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(Math.max(clamped - i, 0), 1);

        return (
          <div key={i} className="relative shrink-0" style={{ width: size, height: size }}>
            <Star size={size} fill="none" color="#ddd" className="absolute inset-0" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star size={size} fill="#FFB400" color="#FFB400" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
