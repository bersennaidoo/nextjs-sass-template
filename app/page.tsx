import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className="home">
      <Image
        className="home__hero"
        src="/images/hero-desktop.png"
        width={1000}
        height={760}
        alt="Feature"
      />
      <p className="home__intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam
        corrupti dolores possimus fugiat voluptatibus fugit eius placeat eveniet
        sequi non perspiciatis rerum, dolorem dolorum ab qui cum illum. Nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        incidunt iusto unde deleniti iure magni veritatis tempora quae quibusdam
        aperiam voluptate a esse excepturi, qui corrupti aut quidem accusamus
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque
        expedita veritatis impedit, repellat nisi optio laboriosam voluptatum
        sint error, at fugit perspiciatis dolores sit accusamus totam nesciunt!
        Magnam, impedit.
      </p>
      <div className="home__button__container">
        <button
          type="button"
          className="btn btn-primary btn-lg home__cta__button"
        >
          <a className="home__link" href="/product-catalog">
            Check Out The Products Now!
          </a>
        </button>
      </div>
    </div>
  );
}
