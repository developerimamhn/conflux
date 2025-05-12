import Image from "next/image";
import Header from "./component/Header";
import Body from "./component/Body";
import LenisProvider from "./LenisProvider";
import allbackground from "./component/image/allbackgrond.png";

export default function Home() {
  return (
    <div className="relative">
    <Image src={allbackground} alt="background" fill className="object-cover object-center absolute left-0 top-0 Z-[-1]" />
      <LenisProvider>
      <Header />
      <Body />
      </LenisProvider>
    </div>
  );
}
