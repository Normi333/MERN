import NavBar from "../components/NavBar";
import LatestProducts from "../components/LatestProducts";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <NavBar />
      <img src="/banner.png" width="100%" />
      <LatestProducts />
      <FeaturedProducts />
    </>
  );
}
