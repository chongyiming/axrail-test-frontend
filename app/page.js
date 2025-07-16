import Image from "next/image";
import Header from "./components/Header";
import Location from "./components/Location";
import Setup from "./components/Setup";
import Cohost from "./components/Cohost";
import Learn from "./components/Learn";
import Tools from "./components/Tools";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <>
      <Header />
      <Location />
      <Setup />
      <Cohost />
      <Learn />
      <Tools />
      <Questions />
    </>
  );
}
