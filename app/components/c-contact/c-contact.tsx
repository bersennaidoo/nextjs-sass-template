"use client";

import React, { useEffect, useState, FC } from "react";

type TCContactProps = {};

const CContact: FC<TCContactProps> = (props: TCContactProps) => {
  const {} = props;

  return (
    <div className="c-contact">
      <aside className="c-contact__aside">
        <iframe
          className="c-contact__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.978980231207!2d30.950469273940705!3d-29.778249318980514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7017cad0ad62b%3A0x833c4a87dfbee5a1!2s42%20Kamatcheeammen%20Pl%2C%20Steelcastle%2C%20Newlands%20West%2C%204037!5e0!3m2!1sen!2sza!4v1719047421730!5m2!1sen!2sza"
          frameBorder={0}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </aside>
      <main className="c-contact__main">
        <div className="c-contact__form-frame">
          <h2 className="c-contact__form-header">
            Complete the form below to ask a question
          </h2>
            <form className="c-contact__form">
              <fieldset className="c-contact__form-fieldset">
                <legend className="c-contact__form-legend">
                  Customer Information
                </legend>
                <label className="c-contact__form-label" htmlFor="fName">
                  First Name:
                </label>
                <input
                  className="c-contact__form-text"
                  type="text"
                  id="fName"
                  name="fName"
                  required
                />
                <label className="c-contact__form-label" htmlFor="lName">
                  Last Name:
                </label>
                <input
                  className="c-contact__form-text"
                  type="text"
                  id="lName"
                  name="lName"
                  required
                />
                <label className="c-contact__form-label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="c-contact__form-email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <label className="c-contact__form-label" htmlFor="phone">
                  Phone:
                </label>
                <input
                  className="c-contact__form-tel"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
                <label className="c-contact__form-label" htmlFor="question">
                  Question:
                </label>
                <textarea
                  className="c-contact__form-textarea"
                  rows={5}
                  cols={65}
                  id="question"
                  name="question"
                ></textarea>
              </fieldset>
              <input
                className="c-contact__form-submit-btn"
                type="submit"
                id="submit"
              />
            </form>
        </div>
      </main>
    </div>
  );
};

export default CContact;
