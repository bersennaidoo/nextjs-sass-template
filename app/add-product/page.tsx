const AddProductPage = () => {

    return (
        <div className="product">
            <h1 className="fs-1 fw-bold mb-3">Add Product</h1>
            <form className="product__form">
                <input type="text" name="name" placeholder="Name" className="form-control product__bg" required />
                <textarea name="description" placeholder="Description" rows={10} className="form-control product__bg" required />
                <input type="url" name="imageUrl" placeholder="Image URL" className="form-control product__bg" required />
                <input type="number" name="price" placeholder="Price" className="form-control product__bg" required />
                <button type="submit" className="btn btn-primary btn-md">Add Product</button>
            </form>
        </div>
    )
}

export default AddProductPage