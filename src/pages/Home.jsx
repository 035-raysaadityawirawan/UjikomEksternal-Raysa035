import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import Category from "../components/Category";
import Motors from "../components/Motors";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <HeroSlider />
      <Category setCategory={setCategory} />
      <Motors selectedCategory={category} />
    </>
  );
};

export default Home;