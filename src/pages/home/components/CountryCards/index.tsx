import React, { useReducer, useState } from "react";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { countries } from "@/dammyData";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type ActionType =
  | { type: "ADD_COUNTRY"; payload: Country }
  | { type: "DELETE_COUNTRY"; payload: string }
  | { type: "RESTORE_COUNTRY"; payload: string }
  | { type: "LIKE_COUNTRY"; payload: string }
  | { type: "SORT_BY_LIKES"; payload: "asc" | "desc" };

type Country = {
  name: string;
  population: number;
  capital: string;
  about: string;
  image: string;
  id: string;
  like: number;
  isDeleted: boolean;
  originalIndex: number;
};

const countryReducer = (state: Country[], action: ActionType): Country[] => {
  switch (action.type) {
    case "ADD_COUNTRY":
      return [
        ...state,
        { ...action.payload, isDeleted: false, originalIndex: state.length },
      ];
    case "DELETE_COUNTRY":
      return state.map((country) =>
        country.id === action.payload
          ? { ...country, isDeleted: true }
          : country
      );
    case "RESTORE_COUNTRY":
      return state.map((country) =>
        country.id === action.payload
          ? { ...country, isDeleted: false }
          : country
      );
    case "LIKE_COUNTRY":
      return state.map((country) =>
        country.id === action.payload
          ? { ...country, like: country.like + 1 }
          : country
      );
    case "SORT_BY_LIKES":
      return [...state].sort((a, b) =>
        action.payload === "asc" ? a.like - b.like : b.like - a.like
      );
    default:
      return state;
  }
};

const initialState: Country[] = countries.map((country, index) => ({
  ...country,
  isDeleted: false,
  originalIndex: index,
}));

const CountryCards: React.FC<{ title: string }> = ({ title }) => {
  const [countryData, dispatch] = useReducer(countryReducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortByLikes, setSortByLikes] = useState<"asc" | "desc" | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCountry = (
    name: string,
    capital: string,
    population: number,
    about: string
  ) => {
    const newCountry: Country = {
      name,
      capital,
      population,
      about,
      image: "vineyards-italy.jpg",
      like: 0,
      id: (Number(countryData.at(-1)?.id) + 1).toString(),
      isDeleted: false,
      originalIndex: countryData.length,
    };

    dispatch({ type: "ADD_COUNTRY", payload: newCountry });
    closeModal();
  };


  const sortedCountries = [...countryData]
    .sort((a, b) => {
      if (sortByLikes) {
        return sortByLikes === "asc" ? a.like - b.like : b.like - a.like;
      }
      return a.originalIndex - b.originalIndex;
    })
    .sort((a, b) => {
      return a.isDeleted === b.isDeleted ? 0 : a.isDeleted ? 1 : -1;
    });

  return (
    <section className={mainStyle["container"]}>
      <div className={style["country-card-header"]}>
        <h2 className={mainStyle["section-title"]}>{title}</h2>
        <div className={style["country-sort"]}>
          <button onClick={() => setSortByLikes("asc")}>
            Sort by Likes (Asc)
          </button>
          <button onClick={() => setSortByLikes("desc")}>
            Sort by Likes (Desc)
          </button>
          <button onClick={openModal}>Add Country</button>
        </div>
      </div>
      <div className={style["country-card-row"]}>
        <Swiper
          spaceBetween={8}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: `.${style["swiper-button-prev"]}`,
            nextEl: `.${style["swiper-button-next"]}`,
          }}
          modules={[Navigation]}
        >
          {sortedCountries.map((country) => (
            <SwiperSlide key={country.id}>
              <Card
                cardData={country}
                handleLikeClick={() =>
                  dispatch({ type: "LIKE_COUNTRY", payload: country.id })
                }
                handleDelete={() =>
                  dispatch({ type: "DELETE_COUNTRY", payload: country.id })
                }
                handleRestore={() =>
                  dispatch({ type: "RESTORE_COUNTRY", payload: country.id })
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style["swiper-button-prev"]}>
          <span>&#10148;</span>
        </div>
        <div className={style["swiper-button-next"]}>
          <span>&#10148;</span>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleAddCountry}
      />
    </section>
  );
};

CountryCards.displayName = "Country Card Component";

export default CountryCards;
