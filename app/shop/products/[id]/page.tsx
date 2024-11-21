import PriceTag from "@/app/components/c-product-card/c-price-tag";
import { prisma } from "@/app/domain/foundation/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " - XYZ Shop",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <main className="c-product-detail">
      <div className="c-product-detail__frame">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="c-product-detail__img"
        />

        <div>
          <h1 className="c-product-detail__heading">{product.name}</h1>
          <PriceTag price={product.price} className="c-product-detail__pricetag" />
          <p className="c-product-detail__desc">{product.description}</p>
        </div>
      </div>
    </main>
  );
}
