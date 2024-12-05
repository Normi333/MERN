import LatestProducts from "../components/LatestProducts";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <img
        src="/banner.jpg"
        width="100%"
        style={{ padding: "3px 0px 3px 0px" }}
      />
      <LatestProducts />
      <FeaturedProducts />
    </>
  );
}
