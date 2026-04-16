import { use } from "react";
import { Link } from "react-router";
import { CartContext } from "../store/CartContext";

// Mock data to scaffold the UI according to API "get customer cart" needs


export default function Cart() {
  const {cartProducts,totalPrice,handleRemoveProductFromCart} = use(CartContext)

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
            <div
              key={item.cart_item_id}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center hover:bg-base-200/50 bg-base-100 transition border border-base-300 mb-5  rounded-2xl"
            >
              {console.log(item.cart_item_id)}
              <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-base-200 sm:h-24 sm:w-24 border border-base-300">
                <img
                  src={item.primary_image}
                  alt={item.product_name}
                  className="h-full w-full object-cover opacity-60"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-serif text-lg font-semibold text-base-content">
                  {item.product_name}
                </h2>

                <p className="mt-1 text-sm text-base-content/70">
                  Variant: {item.variant_size}
                </p>

                <div className="mt-3 flex border border-base-300 rounded-lg w-fit items-center bg-base-100">
                  <button className="px-3 md:py-1 text-base-content/70 hover:text-primary transition font-bold">
                    -
                  </button>

                  <span className="text-xs uppercase tracking-wide text-base-content px-2 font-medium">
                    Qty {item.quantity}
                  </span>

                  <button className="px-3 md:py-1 text-base-content/70 hover:text-primary transition font-bold">
                    +
                  </button>
                </div>
              </div>

              <div className="text-right sm:text-right flex justify-between sm:block mt-2 sm:mt-0">
                <p className="font-medium tabular-nums text-base-content text-lg">
                  ${item.item_total}
                </p>

                <button
                  type="button"
                  className="mt-2 text-sm text-secondary underline decoration-base-300 underline-offset-4 hover:text-error transition cursor-pointer"
                  onClick={() => handleRemoveProductFromCart(item.cart_item_id)}
                >
                  Remove item
                </button>
              </div>
            </div>
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
