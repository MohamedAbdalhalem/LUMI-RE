import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function useGetAllProducts() {
    const [pageNumber,setPageNumber] = useState(1)
      async function getAllProducts() {
        return await axios.get(
          "https://depi-s-gp-backend-production.up.railway.app/api/products",
          {
            params: {
              limit: 9,
              page: pageNumber,
            },
          },
        );
      }
    
      const { data, isLoading, isError } = useQuery({
        queryKey: ["getAllProducts",pageNumber],
        queryFn: getAllProducts,
      });
    
      const allProduct = useMemo(() => data?.data?.data, [ data,pageNumber]);
      const pages = data?.data?.meta.pages
      function handleUpdatePageNumber({selected}) {
        setPageNumber(selected + 1)
        sessionStorage.setItem('pageNumber',selected + 1)
      }
    
      useEffect(() => {
        if (sessionStorage.getItem('pageNumber')) {
          setPageNumber(+sessionStorage.getItem('pageNumber'))
        }
        return () => {
          if (!location.pathname.startsWith('/products') ) {
            sessionStorage.removeItem('pageNumber')
          }
        }
      }, [])
    return {
        pageNumber,
        isLoading,
        isError,
        allProduct,
        pages,
        handleUpdatePageNumber,

  }
}
