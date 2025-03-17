import { Poppins } from "next/font/google";
import next from "/public/next.svg";
import HomeHero from "@/components/Home/HomeHero";
import DynamicForm from "@/components/Home/DynamicForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <h1
        className={`${poppins.className} text-3xl text-center font-semibold py-10`}
      >
        Home
      </h1>
      <HomeHero />
      <DynamicForm />
    </>
  );
}
