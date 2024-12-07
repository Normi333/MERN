import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProductsSkeleton } from "./ProductsSkeleton";

const getFeaturedProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/featured");
  return res.data.data;
};

export default function ResponsiveCarousel() {
  const { data: featuredproducts, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProduct,
  });

  return (
    <div style={{ maxWidth: "80%", margin: "auto" }}>
      {isLoading ? (
        <div>
          <ProductsSkeleton />
        </div>
      ) : (
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          {featuredproducts?.map((product) => (
            <div key={product._id}>
              <img
                src={product.image}
                alt={product.name}
                style={{ height: "400px", objectFit: "cover" }}
              />
              {console.log(product.image)}
              <p className="legend">{product.name}</p>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
