const AddProductPage = () => {
  return (
    <div className="product-form-container" data-cy="product-form-container">
      <h1 className="fs-1 fw-bold mb-3 product-form-container__heading">
        Add Product
      </h1>
      <form className="product-form-container__form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control product-form-container__input__bg"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          rows={10}
          className="form-control product-form-container__input__bg"
          required
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          className="form-control product-form-container__input__bg"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="form-control product-form-container__input__bg"
          required
        />
        <button
          type="submit"
          className="btn btn-primary btn-md product-form-container__submit__button"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
