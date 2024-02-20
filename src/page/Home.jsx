import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main  from "@/components/Main";
import { useEffect, useState } from "react";


export default function Home() {
  const [visitor, setVisitor] = useState(0);

  useEffect(() => {

    const randomVisitor = Math.floor(Math.random()*10);

    console.log(randomVisitor);

    if (randomVisitor >= 5) {
      setVisitor(1);
    }
  }, []);

  return (
    <div className="max-w-6xl m-auto bg-fuchsia-900">
        <Header />
        <Main />
        <Footer visitor={visitor}/>
      </div>
  );
}
