import Image from "next/image";

export default function Home() {
  return (
    <div className="container mt-3">
      <Image className="img-fluild d-hidden d-block-md"  src="/images/hero-desktop.png" width={1000} height={760} alt="Feature" />
      <p>
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
      <button type="button" className="btn btn-primary btn-lg">
        <a href="/dashboard">Check Out The Dashboard Now!</a>
      </button>
    </div>
  );
}
