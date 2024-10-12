import React, { FC } from "react";

type TUpdateProductPageProps = {
  params: {
    id: string;
  };
};

const UpdateProductPage: FC<TUpdateProductPageProps> = (
  props: TUpdateProductPageProps
) => {
  const { params } = props;
  const id = params.id;
  return (
    <main>
      <section id="update-product" className="container update-product-container" data-cy="update-product">
        <header>
          <h2>Update Product Page {id} </h2>
        </header>
        <main>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A autem
            tenetur quam? Rerum nesciunt asperiores nam consectetur porro, quae
            minima, ullam nemo hic natus perferendis illum doloribus error eius
            recusandae?
          </p>
        </main>
      </section>
    </main>
  );
};

export default UpdateProductPage;
