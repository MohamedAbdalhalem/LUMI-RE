import useProductDetials from "../hooks/useProductDetials";

export default function ProductDetials() {
  const { productDetials, selectedVariant, setSelectedVariant, isLoading } =
    useProductDetials();
  return (
    <section className="bg-base-100 min-h-screen py-12">
      {/* PRODUCT TOP SECTION */}
      {isLoading && <ProductDetialsSkeleton />}
      {!isLoading && (
        <div className="grid items-start gap-8 px-4 py-8 md:px-8 lg:grid-cols-7 lg:gap-12 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm lg:col-span-4 flex items-center justify-center p-5 sm:p-6">
            {/* Category badge */}
            <span className="absolute top-4 left-4 bg-black text-white text-[10px] sm:text-xs px-3 py-1 z-10 rounded-full tracking-wide">
              {productDetials?.category?.category_name}
            </span>

            {/* Image */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
              <img
                src={productDetials?.images[0].image_url}
                alt={productDetials?.product_name}
                className="w-full h-auto object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 flex flex-col justify-center h-full">
            {/* Top */}
            <div>
              {/* Title + Price */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                  {productDetials?.product_name}
                </h1>

                <span className="bg-gray-100 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full w-fit">
                  ${selectedVariant?.price}
                </span>
              </div>

              {/* Category description */}
              <p className="text-xs text-gray-400 mb-3">
                {productDetials?.category?.description}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm sm:text-base mb-5 leading-relaxed">
                {productDetials?.description}
              </p>

              {/* Stock status */}
              <p
                className={`text-xs font-medium mb-4 ${
                  selectedVariant?.stock <= selectedVariant?.low_stock_threshold
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {selectedVariant?.stock <= selectedVariant?.low_stock_threshold
                  ? `⚠ Only ${selectedVariant?.stock} left`
                  : "✔ In Stock"}
              </p>

              {/* Volume Selector */}
              <div className="mb-6">
                <p className="mb-2 text-xs text-gray-500 uppercase tracking-widest">
                  Select Volume
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {productDetials?.variants.map((variant) => {
                    const isActive =
                      variant.variant_id === selectedVariant?.variant_id;

                    return (
                      <button
                        key={variant.variant_id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-5 py-2 text-sm rounded-lg transition ${
                          isActive
                            ? "bg-black text-white border-2 border-black"
                            : "border border-gray-300 text-gray-700 hover:border-black"
                        }`}
                      >
                        {variant.size}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div>
              {/* CTA */}
              <button
                disabled={selectedVariant?.stock === 0}
                className="w-full py-3 rounded-xl bg-black text-white text-sm font-semibold tracking-wide hover:opacity-90 active:scale-95 transition mb-4 disabled:opacity-50"
              >
                {selectedVariant?.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>

              {/* Secondary actions */}
              <div className="flex gap-2 sm:gap-3 mb-5">
                <button className="flex-1 py-2 border border-gray-300 rounded-lg text-sm hover:border-black transition">
                  ♡ Wishlist
                </button>

                <button className="flex-1 py-2 border border-gray-300 rounded-lg text-sm hover:border-black transition">
                  Share
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["VEGAN", "CLINICAL GRADE", "CRUELTY FREE"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 font-medium hover:bg-gray-200 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RECOMMENDED SIMILAR PRODUCTS BY INGREDIENTS */}
      {/* <div className="mt-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl font-medium text-base-content mb-6 border-b border-base-300 pb-2">
          Highly recommended with this product
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Gentle Cleanser", label: "Step 1" },
            { name: "Exfoliating Toner", label: "Step 2" },
            { name: "Hydra Barrier", label: "Step 4" }
          ].map((item, i) => (
             <div key={i} className="rounded-xl border border-base-300 bg-base-200/30 p-4 text-center hover:bg-base-200/60 transition cursor-pointer">
                <div className="h-24 w-full bg-base-300 rounded-lg mb-3 object-cover flex items-center justify-center text-xs text-base-content/40">Image Placeholder</div>
                <p className="text-xs uppercase text-primary font-semibold tracking-wider mb-1">{item.label}</p>
                <p className="text-sm font-medium text-base-content">{item.name}</p>
             </div>
          ))}
        </div>
      </div> */}

      {/* REVIEWS SECTION */}
      {/* <div className="mt-20 px-4 md:px-8 max-w-7xl mx-auto border-t border-base-300 pt-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-light text-base-content md:text-2xl">
            Customer Reviews
          </h2>
          <div className="text-right">
             <span className="text-2xl font-semibold text-base-content">4.8</span>
             <span className="text-sm text-base-content/60 ml-2 block">Based on 128 reviews</span>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { rating: "★★★★★", text: "My skin texture improved within 2 weeks. This serum feels lightweight and effective.", author: "Sarah M.", verified: true },
            { rating: "★★★★☆", text: "Great for oily skin. Helped reduce pores visibility significantly.", author: "Ahmed K.", verified: true },
            { rating: "★★★★★", text: "Absorbs quickly and gives a subtle glow. Definitely repurchasing.", author: "Lina R.", verified: false }
          ].map((rev, i) => (
             <div key={i} className="rounded-xl border border-base-300 bg-base-200/50 p-6 flex flex-col">
               <p className="mb-2 text-sm text-warning">{rev.rating}</p>
               <p className="mb-4 text-sm leading-relaxed text-base-content/80 flex-grow">
                 {rev.text}
               </p>
               <div className="flex justify-between items-center text-xs">
                 <span className="font-semibold text-base-content">{rev.author}</span>
                 {rev.verified && <span className="text-success flex items-center gap-1"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg> Verified</span>}
               </div>
             </div>
          ))}
        </div>
        
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-base-300 bg-base-200/30 p-6">
          <p className="text-sm font-medium text-base-content mb-1">
            Write a review
          </p>
          <p className="text-xs text-base-content/60 mb-4">Only verified buyers can submit reviews.</p>
          <div className="flex gap-1 mb-3 text-base-content/30 cursor-pointer">
             <span className="hover:text-warning">★</span><span className="hover:text-warning">★</span><span className="hover:text-warning">★</span><span className="hover:text-warning">★</span><span className="hover:text-warning">★</span>
          </div>
          <textarea
            rows={3}
            className="w-full rounded-xl border border-base-300 bg-base-100 px-3 py-2 text-sm focus:outline-none focus:border-primary"
            placeholder="Share your experience..."
          />
          <button
            type="button"
            className="mt-4 rounded-xl bg-neutral px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-content w-full"
          >
            Submit review
          </button>
        </div>
      </div> */}
    </section>
  );
}

function ProductDetialsSkeleton() {
  return (
    <div className="grid items-start gap-8 px-4 py-8 md:px-8 lg:grid-cols-7 lg:gap-12 max-w-7xl mx-auto animate-pulse">
      {/* Image Skeleton */}
      <div className="lg:col-span-4 bg-white rounded-3xl shadow-md p-6 flex items-center justify-center">
        <div className="skeleton w-full max-w-md h-64 sm:h-80 md:h-96 rounded-xl"></div>
      </div>

      {/* Content Skeleton */}
      <div className="lg:col-span-3 flex flex-col gap-5">
        {/* Title + Price */}
        <div className="flex justify-between items-center gap-3">
          <div className="skeleton h-6 w-40 rounded"></div>
          <div className="skeleton h-6 w-20 rounded-full"></div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-full rounded"></div>
          <div className="skeleton h-4 w-5/6 rounded"></div>
          <div className="skeleton h-4 w-2/3 rounded"></div>
        </div>

        {/* Volume Selector */}
        <div className="flex gap-3 mt-2">
          <div className="skeleton h-10 w-20 rounded-lg"></div>
          <div className="skeleton h-10 w-20 rounded-lg"></div>
        </div>

        {/* Button */}
        <div className="skeleton h-12 w-full rounded-xl mt-2"></div>

        {/* Secondary Buttons */}
        <div className="flex gap-3">
          <div className="skeleton h-10 flex-1 rounded-lg"></div>
          <div className="skeleton h-10 flex-1 rounded-lg"></div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <div className="skeleton h-6 w-16 rounded-full"></div>
          <div className="skeleton h-6 w-20 rounded-full"></div>
          <div className="skeleton h-6 w-24 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
