import React, { FC } from "react"

type TProductDetailPageProps = {
  params: {
    id: string
  }
}

const ProductDetailPage: FC<TProductDetailPageProps> = (props: TProductDetailPageProps) => {
  const { params } = props
  const id = params.id
    return (
      <main>
        <section id="product-detail" className="container product-detail-container" data-cy="product-detail">
          <header>
            <h2>Product Detail Page {id} </h2>
          </header>
          <main>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, temporibus. Ea odio minus quaerat voluptatum, quas iure error reiciendis doloremque aut quam temporibus reprehenderit voluptas a! Esse ducimus omnis aperiam?</p>
          </main>
        </section>
      </main>
    );
  };
  
  export default ProductDetailPage;