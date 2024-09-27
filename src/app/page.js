import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <div>
      This is the home page
      <Navbar/>  
      <Faq/>
    </div>
  );
}
