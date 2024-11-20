import { Product } from "@prisma/client";
import Link from "next/link";
import CPriceTag from "./c-price-tag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function CProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <div className="c-shop__product-card">
    <Link
      href={"/shop/products/" + product.id}
      className="c-shop__product-card-link"
    >
      <figure>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="c-shop__product-card-img"
        />
      </figure>
      </Link>
      <div className="c-shop__product-card-body">
        <h2 className="c-shop__product-card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        <p>{product.description}</p>
        <CPriceTag price={product.price} />
      </div>
    </div> 
  );
}
