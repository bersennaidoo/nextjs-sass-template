"use client";

import React, { useEffect, useState, FC } from "react";
import { FaAmazon } from "react-icons/fa";

type TCAboutProps = {};

const CAbout: FC<TCAboutProps> = (props: TCAboutProps) => {
  const {} = props;

  return (
    <div className="c-about">
      <div className="c-about__section1">
        <div className="c-about__heading-frame">
          <h2 className="c-about__heading">About Us</h2>
        </div>
        <div className="c-about__columns2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
            veniam sed blanditiis unde ullam maxime veritatis perferendis
            cupiditate, at non esse!
          </p>
          <p className="">
            Enim, nisi labore exercitationem facere cupiditate nobis quod autem
            veritatis quis minima expedita. Cumque odio illo iusto reiciendis,
            labore impedit omnis, nihil aut atque, facilis necessitatibus
            asperiores porro qui nam.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            saepe, explicabo nihil. Est, autem error cumque ipsum repellendus
            veniam sed blanditiis unde ullam maxime veritatis perferendis
            cupiditate, at non esse!
          </p>
          <p className="">
            Enim, nisi labore exercitationem facere cupiditate nobis quod autem
            veritatis quis minima expedita. Cumque odio illo iusto reiciendis,
            labore impedit omnis, nihil aut atque, facilis necessitatibus
            asperiores porro qui nam.
          </p>
        </div>
      </div>

      <div className="c-about__section2">
        <div className="c-about__section2-grid">
          <div className="c-about__section2-item-img">
            <div className="c-about__section2-img-frame">
              <img
                src="/images/400x300.png"
                alt="Image"
                className="c-about__section2-img"
              />
            </div>
          </div>
          <div className="c-about__section2-item-icons1">
            <div className="">
              <h3 className=""><FaAmazon /> Quality properties</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>

            <div className="c-about__section2-item-icons2">
              <div className="">
                <h3 className=""><FaAmazon /> Top rated agents</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>

            <div className="c-about__section2-item-icons3">
              <div className="">
                <h3 className=""><FaAmazon /> Easy and safe</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-about__section3">
        <div className="c-about__section3-grid">
          <div className="c-about__section3-item-img">
            <div className="c-about__section3-img-frame">
              <img
                src="/images/400x300.png"
                alt="Image"
                className="c-about__section3-img"
              />
            </div>
          </div>
          <div className="c-about__section3-item-icons1">
            <div className="">
              <h3 className=""><FaAmazon /> Quality properties</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>

            <div className="c-about__section3-item-icons3">
              <div className="">
                <h3 className=""><FaAmazon /> Top rated agents</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>

            <div className="c-about__section3-item-icons3">
              <div className="">
                <h3 className=""><FaAmazon /> Easy and safe</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAbout;
