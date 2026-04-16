import { use } from "react";
import { Link } from "react-router";
import { CartContext } from "../store/CartContext";
import CartProduct from "../components/CartProduct";

// Mock data to scaffold the UI according to API "get customer cart" needs

export default function Cart() {
  const { cartProducts, totalPrice } = use(CartContext);

  return (
    <section className="bg-base-100 min-h-screen py-12">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <header className="mb-8">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
            Shopping bag
          </p>
          <h1 className="font-serif text-3xl font-light text-base-content md:text-4xl">
            Cart
          </h1>
          <p className="mt-2 text-base-content/70">
            Review your selection before proceeding.
          </p>
        </header>

        <div className="mt-10 divide-y divide-base-300    overflow-hidden ">
          {cartProducts.map((item) => (
            <CartProduct
              key={item.cart_item_id}
              id={item.cart_item_id}
              image={item.primary_image}
              name={item.product_name}
              size={item.variant_size}
              quantity={item.quantity}
              productTotalPrice={item.item_total}
              stock={item.stock}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-base-300 bg-base-200/50 p-6 md:flex-row md:items-start md:justify-between shadow-sm">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              Order Summary
            </p>
            <p className="mt-2 text-sm text-base-content/70">
              Shipping and taxes calculated at next step.
            </p>
          </div>
          <div className="text-right w-full md:w-auto">
            <div className="border-b border-base-300 pb-4 mb-4">
              <p className="text-sm text-base-content/70 flex justify-between md:justify-end gap-16">
                Subtotal
                <span className="font-medium tabular-nums text-base-content">
                  {totalPrice}
                </span>
              </p>
            </div>
            {/* The user specifically asked NOT to add the checkout page, so we only provide the UI button */}
            <button className="btn btn-neutral w-full md:w-auto min-w-[200px]rounded-xl text-xs font-semibold uppercase tracking-[0.2em]">
              Proceed
            </button>
            <Link
              to="/products"
              className="mt-4 block text-center text-sm text-base-content/60 hover:text-primary transition no-underline md:text-right underline-offset-4"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
