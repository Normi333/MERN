import Grid from "@mui/material/Grid2";
import ProductCard from "../components/ProductsCard";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductsSkeleton } from "./ProductsSkeleton";
import { Box } from "@mui/material";

const getFeaturedProduct = async () => {
  const res = await axios.get("http://localhost:3000/api/product/featured");
  return res.data.data;
};

export default function FeaturedProducts() {
  const { data: featuredproducts, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProduct,
  });
  console.log(featuredproducts);
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          marginY: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#3B1C32",
            position: "relative",
            zIndex: 1,
            display: "inline-block",
            paddingX: 2,
            paddingY: 0.5,
            background:
              "linear-gradient(90deg, rgba(59,28,50,0.1) 0%, rgba(59,28,50,0.3) 100%)",
            borderRadius: "4px",
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              color: "#5C2B48",
              transform: "scale(1.05)",
            },
          }}
        >
          FEATURED PRODUCT
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {isLoading ? (
          <>
            <ProductsSkeleton />
          </>
        ) : (
          featuredproducts?.map((product) => (
            <Grid key={product._id} size={{ md: 3, sm: 6 }}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
        {}
      </Grid>
    </>
  );
}
