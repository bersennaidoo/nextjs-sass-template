import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <main className="container bg-primary">
        <h2>Next Bootstrap</h2>
      </main>
      <footer className="">
        &copy;Copyright 2024
      </footer>
    </div>
  );
}
