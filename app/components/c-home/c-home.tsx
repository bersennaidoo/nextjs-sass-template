"use client";

import React, { useEffect, useState, FC } from "react";
import Image from "next/image"

type TCHomeProps = {};

const CHome: FC<TCHomeProps> = (props: TCHomeProps) => {
  const {} = props;

  return (
    <div className="c-home v-spacer">
      <aside className="c-home__aside">
        <div className="c-home__specials-frame">
          <Image className="c-home__specials" src="/images/viral.svg" width={500} height={500} alt="specials" />
        </div>
      </aside>
      <main className="c-home__main">
        <div className="c-home__card">
          <img className="c-home__card-img" src="/images/400x300.png" />
          <div className="c-home__card-body">
            <h5 className="c-home__card-title">Card title</h5>
            <p className="c-home__card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam modi
              illum et.
            </p>
            <a href="/shop" className="c-home__card-btn">
              Shop
            </a>
          </div>
        </div>
        <div className="c-home__card">
          <img className="c-home__card-img" src="/images/400x300.png" />
          <div className="c-home__card-body">
            <h5 className="c-home__card-title">Card title</h5>
            <p className="c-home__card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam modi
              illum et.
            </p>
            <a href="#" className="c-home__card-btn">
             Shop 
            </a>
          </div>
        </div>
        <div className="c-home__card">
          <img className="c-home__card-img" src="/images/400x300.png" />
          <div className="c-home__card-body">
            <h5 className="c-home__card-title">Card title</h5>
            <p className="c-home__card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam modi
              illum et.
            </p>
            <a href="#" className="c-home__card-btn">
              Shop
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CHome;
