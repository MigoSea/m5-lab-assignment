import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  };

  return (
    <main className="container my-4">
      {props.products.map((product) => (
        <section key={product.id} className="product-item py-4 border-bottom">
          <h5 className="product-title font-weight-bold mb-3">
            {product.desc}
          </h5>
          <div className="d-flex align-items-center">
            <div className="product-image-container mr-5">
              <img
                src={product.image}
                alt={product.desc}
                className="product-image"
                onClick={() => handleShow(product)}
              />
            </div>

            <div className="qty-controls d-flex align-items-center">
              <button
                type="button"
                className="btn btn-secondary qty-btn mr-2"
                onClick={() => props.onIncrement(product)}
                aria-label={`Increase quantity of ${product.desc}`}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
              <button
                type="button"
                className="btn btn-secondary qty-btn mr-4"
                onClick={() => props.onDecrement(product)}
                aria-label={`Decrease quantity of ${product.desc}`}
              >
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>

              <div className="quantity-box-wrapper text-center">
                <div className="quantity-label-top text-muted">Quantity</div>
                <span className="quantity-display">{product.value}</span>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5"
          />
          <p className="mt-3">
            <span className="text-dark font-weight-bold">Ratings:</span>{" "}
            {showImge.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default DisplayProducts;
