import LatestProducts from "../components/LatestProducts";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <img src="/banner.jpg" width="100%" />
      <LatestProducts />
      <FeaturedProducts />
    </>
  );
}
