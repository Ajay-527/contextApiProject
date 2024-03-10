import { CartState } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = CartState();

  return (
    <div className="products">
      <div>
        <span>{prod.product_id}</span>
        <span>{prod.description}</span>
        <span>{prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
