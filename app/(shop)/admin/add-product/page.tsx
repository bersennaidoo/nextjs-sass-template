export const metadata = {
  title: "Add Product - XYZ Admin"
}
const AddProductPage = () => {
  return (
    <main>
      <section id="add-product" className="container add-product-container" data-cy="add-product">
        <div className="row">
          <div className="col-sm-12">
            <div className="">
              <h2>Add Product Form</h2>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Enter description"
                    rows={10}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="url"
                    name="ImageUrl"
                    className="form-control"
                    placeholder="Enter ImageUrl"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Enter price"
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <input
                    type="submit"
                    value="Add Product"
                    className="btn btn-primary btn-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default AddProductPage;
