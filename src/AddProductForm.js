import React from "react";

function AddProductForm(props) {
  return (
    <div className="form-container">
      <div className="container">
        {props.success && <p>{props.success}</p>}
        {props.validation && <p>{props.validation}</p>}

        <form onSubmit={props.handleAddProductForm}>
          <div className="form-element">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Product Name"
              value={props.product.name ?? ""}
              onChange={(event) =>
                props.setProduct({ ...props.product, name: event.target.value })
              }
            />
          </div>
          <div className="form-element">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              placeholder="Product Price"
              value={props.product.price ?? ""}
              onChange={(event) =>
                props.setProduct({
                  ...props.product,
                  price: event.target.value,
                })
              }
            />
          </div>
          <div className="form-element">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              id="quantity"
              placeholder="Product Quantity"
              value={props.product.quantity ?? ""}
              onChange={(event) =>
                props.setProduct({
                  ...props.product,
                  quantity: event.target.value,
                })
              }
            />
          </div>

          <div className="form-element">
            <img src={props.imgData} width={400} />
          </div>

          <div className="form-element">
            <label htmlFor="quantity">Image</label>
            <input
              type="file"
              id="file-selector"
              accept=".jpg, .jpeg, .png"
              onChange={(event) => props.handleImageUpload(event)}
            />
          </div>

          <div className="form-element">
            <input type="submit" />
          </div>
          {/* <div className="form-element">
            <label htmlFor="image">Name</label>
            <input type="text" placeholder="" />
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
