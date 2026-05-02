import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function useGetAllProducts() {
    const [pageNumber,setPageNumber] = useState(1)
    const [category,setCategory] = useState('')
    const [search,setSearch] = useState('')
      async function getAllProducts() {
        return await axios.get(
          "https://depi-s-gp-backend-production.up.railway.app/api/products",
          {
            params: {
              limit: 9,
              page: pageNumber,
              category ,
              search
            },
          },
        );
      }
    
      const { data, isLoading, isError } = useQuery({
        queryKey: ["getAllProducts",pageNumber,category,search],
        queryFn: getAllProducts,
      });
    
      const allProduct = useMemo(() => data?.data?.data, [ data,pageNumber]);
      const pages = data?.data?.meta.pages

      function handleUpdatePageNumber({selected}) {
        setPageNumber(selected + 1)
        sessionStorage.setItem('pageNumber',selected + 1)
      }
      
      function handleUpdateCategory(category){
        setCategory(prevState => category)
        setPageNumber(prevState => 1)
        sessionStorage.removeItem('pageNumber')
        sessionStorage.setItem('category',category)
      }
      
      function handleSearch(value){
        setPageNumber(prevState => 1)
        sessionStorage.removeItem('pageNumber')
        setSearch(prevValue => value)
        sessionStorage.setItem('search',value)
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

      useEffect(() => {
        if (sessionStorage.getItem('category')) {
          setCategory(sessionStorage.getItem('category'))
        }
        return () => {
          if (!location.pathname.startsWith('/products') ) {
            sessionStorage.removeItem('category')
          }
        }
      }, [])

      useEffect(() => {
        if (sessionStorage.getItem('search')) {
          setSearch(sessionStorage.getItem('search'))
        }
        return () => {
          if (!location.pathname.startsWith('/products') ) {
            sessionStorage.removeItem('search')
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
        handleUpdateCategory,
        category,
        handleSearch,
        search
  }
}

