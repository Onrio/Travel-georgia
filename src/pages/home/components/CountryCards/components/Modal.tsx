import React, { ChangeEvent, useState, FormEvent } from "react";
import style from "../style.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    name: string,
    capital: string,
    population: number,
    about: string
  ) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  const [about, setInfo] = useState("");

  const [nameError, setNameError] = useState("");
  const [capitalError, setCapitalError] = useState("");
  const [populationError, setPopulationError] = useState("");
  const [aboutError, setAboutError] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleSetCapital = (e: ChangeEvent<HTMLInputElement>) => {
    setCapital(e.target.value);
    setCapitalError("");
  };

  const handleSetPopulation = (e: ChangeEvent<HTMLInputElement>) => {
    setPopulation(e.target.value);
    setPopulationError("");
  };

  const handleCountryInfo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInfo(e.target.value);
    setAboutError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError("Country name is required");
      isValid = false;
    } else if (name.length > 16) {
      setNameError("Country name must be less than 16 characters");
      isValid = false;
    } else if (/\d/.test(name)) {
      setNameError("Country name should not contain numbers");
      isValid = false;
    }

    if (!capital) {
      setCapitalError("Capital is required");
      isValid = false;
    } else if (capital.length > 16) {
      setCapitalError("Capital must be less than 16 characters");
      isValid = false;
    } else if (/\d/.test(capital)) {
      setCapitalError("Capital name should not contain numbers");
      isValid = false;
    }

    if (!population) {
      setPopulationError("Population is required");
      isValid = false;
    } else if (Number(population) <= 0) {
      setPopulationError("Population must be a positive number");
      isValid = false;
    }

    if (!about) {
      setAboutError("Please write something about the country");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit(name, capital, Number(population), about);
  };

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
        <form onSubmit={handleSubmit} className={style["modal-form"]}>
          <input
            type="text"
            name="name"
            placeholder="Country name"
            value={name}
            onChange={handleChangeName}
          />
          {nameError && (
            <span className={style["input-error"]}>{nameError}</span>
          )}

          <input
            type="text"
            name="capital"
            placeholder="Country capital"
            value={capital}
            onChange={handleSetCapital}
          />
          {capitalError && (
            <span className={style["input-error"]}>{capitalError}</span>
          )}

          <input
            type="number"
            name="population"
            placeholder="Population"
            value={population}
            onChange={handleSetPopulation}
          />
          {populationError && (
            <span className={style["input-error"]}>{populationError}</span>
          )}

          <textarea
            name="info"
            placeholder="About country"
            value={about}
            onChange={handleCountryInfo}
          ></textarea>
          {aboutError && (
            <span className={style["input-error"]}>{aboutError}</span>
          )}

          <button type="submit">Add Country</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
