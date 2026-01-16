import ProductItem from "../Section-1/ProductItem";
import OrderSummary from "../Section-1/OrderSummary";

// Import product images
import iphone14 from "../../assets/images/iphone-14.png";
import iphone14Pro from "../../assets/images/iphone-14pro.png";
import airPods from "../../assets/images/airpods.png";

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 14",
    image: iphone14,
    alt: "iphone-14",
    details: "Kapacita: 256 GB, Farba: Silver",
    price: "1299 €",
    originalPrice: "1799 €",
    discount: true,
    discountText: "Ušetríte 17% oproti pôvodnej sume",
    priceColor: "text-[#f54e80]",
  },
  {
    id: 2,
    name: "iPhone 14 PRO",
    image: iphone14Pro,
    alt: "iphone-14-pro",
    details: "Kapacita: 256 GB, Farba: Silver",
    price: "1299 €",
    originalPrice: null,
    discount: false,
    priceColor: "",
  },
  {
    id: 3,
    name: "Apple AirPods 2 GEN",
    image: airPods,
    alt: "airpods",
    details: "Kapacita: 256 GB, Farba: Silver",
    price: "1299 €",
    originalPrice: null,
    discount: false,
    priceColor: "",
  },
];

const Section1 = () => {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Header */}
        <div className="flex justify-center items-center text-center">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h2 className="font-inter font-bold text-xl sm:text-2xl">
              Váš košík
            </h2>
            <span className="text-[#7b7b7b] text-sm sm:text-base">
              V košíku máte aktuálne 2 produkty
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[50%_47%] gap-6 lg:gap-[3%] w-full">
          {/* Left Column - Products List */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              {PRODUCTS.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-1 lg:order-2">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
