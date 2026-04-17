import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

export default function useLaboratoryFavorites() {
  async function getSomeProducts() {
    return await axios.get(
      "https://depi-s-gp-backend-production.up.railway.app/api/products",
      {
        params: {
          limit: 3,
          page: 1,
        },
      },
    );
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getSomeProducts"],
    queryFn: getSomeProducts,
  });

  const someProduct = data?.data?.data;

  return {
    someProduct,
    isLoading,
    isError,
  };
}
