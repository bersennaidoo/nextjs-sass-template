import { prisma } from "@/app/domain/foundation/db/prisma"
import { redirect } from "next/navigation";

async function addProduct(formData: FormData) {
    "use server";
  
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
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
      <h1 className="c-addproduct__heading">Add Product</h1>
      <form className="c-addproduct__form" action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="c-addproduct__formcontrol-input"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="c-addproduct__formcontrol-textarea"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="c-addproduct__formcontrol-input"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="c-addproduct__formcontrol-input"
        />
        <button className="c-addproduct__btn">Add Product</button>
      </form>
    </div>
    )
}

export default AddProductPage