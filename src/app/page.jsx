import Banner from "@/components/Home/Banner";
import Image from "next/image";
import Products from "@/components/Home/Products";
export default function Home() {
  return (
    <div className="max-w-7xl pt-15  mx-auto">
      <div className="flex flex-col space-y-20">
      {/* banner */}
     <section>
     <Banner/>
      </section>
      {/* products */}
      <section>
      <Products/>
      </section>
      </div>
    </div>
  );
}
