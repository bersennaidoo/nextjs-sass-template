import Image from "next/image";
import Dialog from "@/app/components/Dialog/Dialog"
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main id="home-main" className="container home-main" data-cy="home-main">
      <h1>XYZ Corporation</h1>
      <section
        id="home-main-section"
        className="row home-main-container"
        data-cy="home-main-section"
      >
        <header
          id="home-header"
          className="col-sm-12 col-md-6 home-main-container__header"
          data-cy="home-header"
        >
          <Image
            className="home-main-container__hero img-fluid"
            src="/images/2.jpg"
            width={700}
            height={500}
            alt="Feature"
          />
        </header>
        <main className="col-sm-12 col-md-6">
          <p className="home-main-container__intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam
            corrupti dolores possimus fugiat voluptatibus fugit eius placeat
            eveniet sequi non perspiciatis rerum, dolorem dolorum ab qui cum
            illum. Nam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur incidunt iusto unde deleniti iure magni veritatis tempora
            quae quibusdam aperiam voluptate a esse excepturi, qui corrupti aut
            quidem accusamus Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quaerat neque expedita veritatis impedit, repellat nisi optio
            laboriosam voluptatum sint error, at fugit perspiciatis dolores sit
            accusamus totam nesciunt! Magnam, impedit.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg animate animated_bounce home-main-container__cta__button"
          >
            <a className="text-white home__link" href="/products">
              Check Out The Products Now!
            </a>
          </button>
        </main>
      </section>
      <Dialog />
    </main>
  );
}
