"use client"

import React, { useEffect, useState, FC } from "react";

type TCContactProps = {};

const CContact: FC<TCContactProps> = (props: TCContactProps) => {
  const {} = props;

  return (
    <div className="c-contact">
      <aside className="c-contact__aside">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit
          reprehenderit dolore enim id maxime veritatis, mollitia, optio a
          labore inventore perferendis facilis sit voluptatem magni unde
          laboriosam aperiam numquam.
        </p>
      </aside>
      <main className="c-contact__main">
        <p className="c-contact__intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eius!
          Impedit sed obcaecati id non, consequatur corrupti dicta libero
          consectetur dolorum vel iste voluptatum ea, debitis eos eius at
          ipsam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          minus voluptas corrupti tempore sequi. Voluptatum aperiam omnis
          asperiores earum consequatur doloremque quia vitae sint perspiciatis.
          Veniam, recusandae! Incidunt, debitis sequi?
        </p>
      </main>
    </div>
  );
};

export default CContact;
