import React from "react";
import { AuthContext } from "../store/AuthContext";
import { use } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useGetOrdres() {
  const { token } = use(AuthContext);
  async function handlegetOrders() {
    return await axios.get(
      "https://depi-s-gp-backend-production.up.railway.app/api/orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: ["handlegetOrders", token],
    queryFn: handlegetOrders,
  });
  const orders = data?.data.data;
  return {
    orders,
    isLoading,
  };
}
