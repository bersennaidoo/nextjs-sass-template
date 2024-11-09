"use client";
import React, { FC, useState, useEffect } from "react";
import $ from "jquery";
import { Modal } from "bootstrap";

type TCModalProps = {};

const CModal: FC<TCModalProps> = (props: TCModalProps) => {
  const {} = props;
  const [state, setState] = useState<boolean>(false);

  const showModal = () => {
    $("#sh-btn").on("click", function (e) {
      e.preventDefault();
      var myModal = new Modal("#exampleModal", {
        backdrop: false,
        keyboard: true,
        focus: true,
      });
      myModal.show();
      setState(!state);
    });
  };

  const close1Modal = () => {
    $("#cl1-btn").on("click", function () {
      var myModal = Modal.getInstance("#exampleModal")
        myModal?.hide()
        setState(!state);
      })
  };

  const close2Modal = () => {
    $("#cl2-btn").on("click", function () {
      var myModal = Modal.getInstance("#exampleModal")
      myModal?.hide();
      setState(!state);
    });
  };

  useEffect(() => {
    showModal();
    close1Modal();
    close2Modal();
  }, []);

  return (
    <div>
      <button type="button" className="btn btn-primary" id="sh-btn">
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                id="cl1-btn"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" id="cl2-btn">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CModal;
