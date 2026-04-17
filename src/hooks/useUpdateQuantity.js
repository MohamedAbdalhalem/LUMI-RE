import { use } from "react";
import { useActionState } from "react";
import { CartContext } from "../store/CartContext";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function useUpdateQuantity(id,quantity,stock) {
    const { handleRemoveProductFromCart, handleUpdateQuantity } =
        use(CartContext);
   async function handleUpQuantity(prevState, formData) {
    if (quantity + 1 > stock) {
      toast("you can't buy more than that", {
        position: "top-right",
        // icon: <FontAwesomeIcon icon={faX} className="text-red-600" />,
        className: "w-[25vw]",
      });
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
    
    return {
        upQuantityAction,
        downQuantityAction,
        upQuantityPending,
        downQuantityPending
    }
}
