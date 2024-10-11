const AddProductPage = () => {
  return (
    <div id="add-product-container" className="add-product-container" data-cy="add-product-container">
      <h1 id="add-product-container-heading" className="fs-1 fw-bold mb-3 add-product-container__heading" data-cy='add-product-container-heading'>
        Add Product
      </h1>
      <form id="add-product-container-form" className="add-product-container__form bg-white" data-cy="add-product-container-form">
        <div id="add-product-container-form-input-text-container" className="mb-3 add-product-container__form__input__text__container" data-cy="add-product-container-form-input-text-container">
            <label id="add-product-container-form-input-text-container-label" htmlFor="name" className="form-label add-product-container__form__input__text__container__label" data-cy="add-product-container-form-input-text-container-label">Name</label>
            <input id="name" type="text" name="name" placeholder="Name" className="form-control add-product-container__form__input__text__container__input" data-cy="add-product-container-form-input-text-container-input" required />
            <div id="add-product-container-form-input-text-container-desc" className="form-text add-product-container__form__input__text__container__desc" data-cy="add-product-container-form-input-text-container-desc">We'll never share your name with anyone else.</div>
        </div>
         <div id="add-product-container-form-textarea-text-container" className="mb-3 add-product-container__form__textarea__text__container" data-cy="add-product-container-form-textarea-text-container">
            <label id="add-product-container-form-textarea-text-container-label" htmlFor="description" className="form-label add-product-container__form__textarea__text__container__label" data-cy="add-product-container-form-textarea-text-container-label">Description</label>
            <textarea id="description" rows={10} name="description" placeholder="Description" className="form-control add-product-container__form__textarea__text__container__textarea" data-cy="add-product-container-form-textarea-text-container-textarea" required />
            <div id="add-product-container-form-textarea-text-container-desc" className="form-text add-product-container__form__textarea__text__container__desc" data-cy="add-product-container-form-textarea-text-container-desc">We'll never share your details with anyone else.</div>
        </div>
         <div id="add-product-container-form-input-url-container" className="mb-3 add-product-container__form__input__url__container" data-cy="add-product-container-form-input-url-container">
            <label id="add-product-container-form-input-url-container-label" htmlFor="url" className="form-label add-product-container__form__input__url__container__label" data-cy="add-product-container-form-input-url-container-label">Url</label>
            <input id="url" type="url" name="url" placeholder="Url" className="form-control add-product-container__form__input__url__container__input" data-cy="add-product-container-form-input-url-container-input" required />
            <div id="add-product-container-form-input-url-container-desc" className="form-text add-product-container__form__input__url__container__desc" data-cy="add-product-container-form-input-url-container-desc">We'll never share your url with anyone else.</div>
        </div>
         <div id="add-product-container-form-input-number-container" className="mb-3 add-product-container__form__input__price__container" data-cy="add-product-container-form-input-price-container">
            <label id="add-product-container-form-input-price-container-label" htmlFor="price" className="form-label add-product-container__form__input__price__container__label" data-cy="add-product-container-form-input-price-container-label">Price</label>
            <input id="price" type="number" name="price" placeholder="Price" className="form-control add-product-container__form__input__price__container__input" data-cy="add-product-container-form-input-price-container-input" required />
            <div id="add-product-container-form-input-price-container-desc" className="form-text add-product-container__form__input__price__container__desc" data-cy="add-product-container-form-input-price-container-desc">We'll never share your price with anyone else.</div>
        </div>
        <button id="add-product-container-form-submit-button" className="btn btn-primary btn-lg add-product-container__form__submit__button" data-cy="add-product-container-form-submit-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
