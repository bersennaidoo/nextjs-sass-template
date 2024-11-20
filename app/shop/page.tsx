import CProductCard from "@/app/components/c-product-card/c-product-card"
import { prisma } from "@/app/domain/foundation/db/prisma";
import Image from "next/image";
import Link from "next/link";

const Shop = async () => {

    const products = await prisma.product.findMany({
        orderBy: { id: "desc" },
    })
    return (
        <div className="c-shop">
            <div className="c-shop__hero-frame">
                <div className="c-shop__hero-content">
                    <img 
                       src={products[0].imageUrl}
                       alt={products[0].name}
                       className="c-shop__hero-img"
                    />
                    <div className="c-shop__hero-content-frame">
                        <h1 className="c-shop__hero-heading">{products[0].name}</h1>
                        <p className="c-shop__hero-phrase">{products[0].description}</p>
                        <Link 
                           href={"/shop/products/" + products[0].id} 
                           className="c-shop__hero-btn"
                        >
                            Check it out
                        </Link>
                    </div>
                </div>
            </div>
            <div className="c-shop__product-card-frame">
                {products.slice(1).map((product) => (
                    <CProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default Shop