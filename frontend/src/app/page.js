import Image from "next/image";
import styles from "./page.module.css";
import { Register } from "./Register.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

export default function Home() {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header/>
      <main className="flex-grow-1">
        <Register/>
      </main>
      <Footer/>


    </div>
    // <div>
    //   <Header/>
    //   <Register/>
    //   <Footer/>
    // </div>
  );
}
