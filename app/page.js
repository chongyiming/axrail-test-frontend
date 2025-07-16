import Image from "next/image";
import Header from "./components/Header";
import Location from "./components/Location";
import Setup from "./components/Setup";
import Cohost from "./components/Cohost";

export default function Home() {
  return (
    <>
      <Header />
      <Location />
      <Setup />
      <Cohost />
    </>
  );
}
