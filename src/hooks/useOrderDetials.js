import { use } from "react";
import { AuthContext } from "../store/AuthContext";
import { useParams } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useOrderDetials() {
  const { token } = use(AuthContext);
  const { id } = useParams();

  async function getOrderDetials() {
    return await axios.get(
      `https://depi-s-gp-backend-production.up.railway.app/api/orders/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getOrderDetials", id],
    queryFn: getOrderDetials,
  });
  const orderDetails = data?.data?.data;
  console.log(orderDetails)
  return {
    orderDetails,
    isLoading,
    isError
  }
}
