import React, { memo } from "react";
import { use } from "react";
import { CartContext } from "../store/CartContext";
import { useActionState } from "react";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default memo(function CartProduct({
  id,
  image,
  name,
  size,
  quantity,
  productTotalPrice,
  stock,
}) {
  const { handleRemoveProductFromCart, handleUpdateQuantity } =
    use(CartContext);

    async function handleUpQuantity(prevState, formData) {
        if (quantity + 1 > stock) {
          toast("you can't buy more than that", {
          position: "top-right",
          icon: <FontAwesomeIcon icon={faX} className="text-red-600" />,
          className: "w-[25vw]",
        })
      }
    await handleUpdateQuantity(id, quantity + 1);
  }

  async function handleDownQuantity(prevState, formData) {
    if (quantity - 1 === 0) {
      await handleRemoveProductFromCart(id);
      return;
    }
    await handleUpdateQuantity(id, quantity - 1);
  }

  const [upQuantityState, upQuantityAction, upQuantityPending] =
    useActionState(handleUpQuantity);

  const [downQuantityState, downQuantityAction, downQuantityPending] =
    useActionState(handleDownQuantity, null);
  return (
    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center hover:bg-base-200/50 bg-base-100 transition border border-base-300 mb-5  rounded-2xl">
      <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-base-200 sm:h-24 sm:w-24 border border-base-300">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover opacity-60"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="font-serif text-lg font-semibold text-base-content">
          {name}
        </h2>

        <p className="mt-1 text-sm text-base-content/70">Variant: {size}</p>

        <form className="mt-3 flex border border-base-300 rounded-lg w-fit items-center bg-base-100">
          <button
            formAction={downQuantityAction}
            disabled={upQuantityPending || downQuantityPending}
            className="px-3 md:py-1 text-base-content/70 hover:text-primary transition font-bold"
          >
            -
          </button>
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="quantity" value={quantity} />
          <span className="text-xs uppercase tracking-wide text-base-content px-2 font-medium">
            Qty {quantity}
          </span>

          <button
            formAction={upQuantityAction}
            disabled={upQuantityPending || downQuantityPending}
            className="px-3 md:py-1 text-base-content/70 transition font-bold "
          >
            +
          </button>
        </form>
      </div>

      <div className="text-right sm:text-right flex justify-between sm:block mt-2 sm:mt-0">
        <p className="font-medium tabular-nums text-base-content text-lg">
          ${productTotalPrice}
        </p>

        <button
          type="button"
          className="mt-2 text-sm text-secondary underline decoration-base-300 underline-offset-4 hover:text-error transition cursor-pointer"
          onClick={() => handleRemoveProductFromCart(id)}
        >
          Remove item
        </button>
      </div>
    </div>
  );
});
