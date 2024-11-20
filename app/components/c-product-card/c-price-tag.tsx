import { formatPrice } from "@/app/domain/services/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function CPriceTag({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}
