import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../features/CartReducer";

const Cart = () => {
  let { cart, totalPrice, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="row">
        {cart.map((e, i) => {
          return (
            <>
              <div className="col-lg-4 col-md-6 col-sm-12" key={i + 1}>
                <div className="card m-2">
                  <div className="card-title">
                    <h2>{i + 1}</h2>
                    {e.user}
                  </div>
                  <div className="card-body">
                    {e.product}
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(del(e))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
