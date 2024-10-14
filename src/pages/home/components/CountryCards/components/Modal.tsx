import React from "react";
import style from "../style.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className={style["modal"]}>
      <div className={style["modal-content"]}>
        <div className={style["modal-header"]}>
          <h2>Add Country</h2>
          <button onClick={onClose}>
            <span>&#88;</span>
          </button>
        </div>
        <form onSubmit={onSubmit} className={style["modal-form"]}>
          <input type="text" name="name" placeholder="Country name" />
          <input type="text" name="capital" placeholder="Country capital" />
          <input type="text" name="population" placeholder="Population" />
          <textarea name="info" placeholder="About country"></textarea>
          <button type="submit">Add Country</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
