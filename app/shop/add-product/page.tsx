import { prisma } from "@/app/domain/foundation/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - XYZ Shop",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("pName")?.toString();
  const description = formData.get("dName")?.toString();
  const imageUrl = formData.get("url")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/shop");
}

const AddProductPage = () => {
  return (
    <div className="c-addproduct">
      <main className="c-addproduct__main">
        <div className="c-addproduct__form-frame">
          <h2 className="c-addproduct__form-header">
            Complete the form below to add a product
          </h2>
          <form className="c-addproduct__form" action={addProduct}>
            <fieldset className="c-addproduct__form-fieldset">
              <legend className="c-addproduct__form-legend">
                Product Information
              </legend>
              <label className="c-addproduct__form-label" htmlFor="pName">
                Product Name:
              </label>
              <input
                className="c-addproduct__form-text"
                type="text"
                id="pName"
                name="pName"
                required
              />
              <label className="c-addproduct__form-label" htmlFor="dName">
                Description:
              </label>
              <input
                className="c-addproduct__form-text"
                type="text"
                id="dName"
                name="dName"
                required
              />
              <label className="c-addproduct__form-label" htmlFor="url">
                ImageUrl:
              </label>
              <input
                className="c-addproduct__form-url"
                type="text"
                id="url"
                name="url"
                required
              />
              <label className="c-addproduct__form-label" htmlFor="price">
                Price:
              </label>
              <input
                className="c-addproduct__form-number"
                type="number"
                id="price"
                name="price"
                required
              />
            </fieldset>
            <button
              className="c-addproduct__form-submit-btn"
              type="submit"
              id="submit"
            >
              Add Product
            </button>
            <span className="c-addproduct__info">We'll never share your information</span> 
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProductPage;
