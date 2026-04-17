import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductList from "./productList";

export default function LaboratoryFavorites() {
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
  return (
    <section className=" backdrop-blur-md  py-12 px-2 md:px-8 ">
      <header className="flex justify-between items-end flex-wrap gap-5 gapy-4 mb-8">
        <div>
          <h3 className="font-bold text-3xl  py-1  mb-3">
            Laboratory Favorites
          </h3>
          <p className=" py-1 text-base font-normal">
            Our most advanced formulations for transformative results.
          </p>
        </div>
        <div>
          <Link
            to="/products"
            className="text-xs  py-1 text-[#1B1C1B] font-blod"
          >
            VIEW ALL FORMULATIONS <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </header>
      <ProductList allProduct={someProduct} isLoading={isLoading} />
    </section>
  );
}
