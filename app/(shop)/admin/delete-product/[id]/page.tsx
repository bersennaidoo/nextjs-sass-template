import React, { FC } from "react"

type TDeleteProductPageProps = {
  params: {
    id: string
  }
}
const DeleteProductPage: FC<TDeleteProductPageProps> = (props: TDeleteProductPageProps) => {
  const { params } = props
  const id = params.id
    return (
      <main className="col-sm-12 col-md-8">
        <section id="delete-product" className="container delete-product-container" data-cy="delete-product">
          <header>
            <h2>Delete Product Page {id}</h2>
          </header>
          <main>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate nihil similique beatae error voluptatum qui. Est, illo perspiciatis velit ipsam cupiditate dolor, recusandae, id laudantium sed nulla nostrum expedita.</p>
          </main>
        </section>
      </main>
    )
  };
  
  export default DeleteProductPage;