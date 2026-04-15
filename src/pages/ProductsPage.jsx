import ProductList from "../components/productList";
import ReactPaginate from "react-paginate";
import useGetAllProducts from "../hooks/useGetAllProducts";
export default function ProductsPage() {
  const { allProduct, handleUpdatePageNumber, isLoading, pageNumber ,pages } =
    useGetAllProducts();

  return (
    <section className="bg-base-100 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="mb-10 text-center md:text-left">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
            LUMIÈRE Catalog
          </p>
          <h1 className="font-serif text-3xl font-light text-base-content md:text-5xl">
            All Products
          </h1>
          <p className="mt-3 text-base-content/70">
            Browse our complete collection of scientifically formulated
            skincare.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-10">
          {/* FILTERS SIDEBAR */}
          <aside className="w-full md:w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-base-content mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-sm text-base-content/70">
                <li className="flex justify-between cursor-pointer hover:text-primary transition">
                  <span className="font-medium text-base-content">All</span>{" "}
                  <span>(24)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-primary transition">
                  <span>Cleansers</span> <span>(3)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-primary transition">
                  <span>Serums</span> <span>(8)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-primary transition">
                  <span>Moisturizers</span> <span>(5)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-base-content mb-4">
                Skin Concern
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer text-sm text-base-content/80">
                  <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                  Hydration
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-sm text-base-content/80">
                  <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                  Anti-Aging
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-sm text-base-content/80">
                  <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                  Brightening
                </label>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6 border-b border-base-300 pb-4">
              <p className="text-sm text-base-content/60">
                Showing 1-6 of 24 products
              </p>
              <select className="select select-sm bg-base-200 border-none text-base-content">
                <option>Sort by: Featured</option>
                <option>Sort by: Newest</option>
                <option>Sort by: Price (Low to High)</option>
              </select>
            </div>

            <ProductList allProduct={allProduct} isLoading={isLoading} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="›"
              previousLabel="‹"
              onPageChange={handleUpdatePageNumber}
              pageRangeDisplayed={3} // 👈 smaller on mobile
              marginPagesDisplayed={pageNumber}
              pageCount={pages}
              forcePage={pageNumber - 1}
              containerClassName="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-8"
              pageClassName="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-m border border-gray-300 hover:border-black transition"
              activeClassName="bg-black text-white border-black"
              previousClassName="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md border border-gray-300"
              nextClassName="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-md border border-gray-300"
              breakClassName="px-1 text-gray-400 text-xs"
              disabledClassName="opacity-40 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
