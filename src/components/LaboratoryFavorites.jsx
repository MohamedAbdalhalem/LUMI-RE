import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    <section className=" dark:bg-[#09090B80] backdrop-blur-md dark:text-white py-12 px-2 md:px-8 ">
      <header className="flex justify-between items-end flex-wrap gap-5 gapy-4 mb-8">
        <div>
          <h3 className="font-bold text-3xl dark:text-white py-1 text-[#1B1C1B] mb-3">
            Laboratory Favorites
          </h3>
          <p className="text-[#43474C] dark:text-white py-1 text-base font-normal">
            Our most advanced formulations for transformative results.
          </p>
        </div>
        <div>
          <Link
            to="/products"
            className="text-xs dark:text-white py-1 text-[#1B1C1B] font-blod"
          >
            VIEW ALL FORMULATIONS <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </header>
      <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {isLoading && <ProductsLoaing />}
        {someProduct?.map((product) => (
          <Product key={product.product_id} id={product.product_id}
            name={product.product_name}
            image={product.images[0].image_url}
            description={product.description}
            price={product.variants[0].price} />
        ))}
      </article>
    </section>
  );
}

function ProductsLoaing() {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
}
