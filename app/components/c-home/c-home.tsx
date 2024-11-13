"use client";

import React, { useEffect, useState, FC } from "react";

type TCHomeProps = {};

const CHome: FC<TCHomeProps> = (props: TCHomeProps) => {
  const {} = props;

  return (
    <div className="c-home v-spacer">
      <aside className="c-home__aside">
        <div className="c-home__specials-frame">
          <img className="c-home__specials" src="/images/2.jpg" />
        </div>
      </aside>
      <main className="c-home__main">
        <div className="c-home__card">
          <h1 className="c-home__card-header">Bananas</h1>
          <img className="c-home__card-img" src="/images/400x300.png" />
          <p className="c-home__card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="c-home__card">
          <h1 className="c-home__card-header">Apples</h1>
          <img className="c-home__card-img" src="/images/400x300.png" />
          <p className="c-home__card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="c-home__card">
          <h1 className="c-home__card-header">Oranges</h1>
          <img className="c-home__card-img" src="/images/400x300.png" />
          <p className="c-home__card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </main>
    </div>
  );
};

export default CHome;
