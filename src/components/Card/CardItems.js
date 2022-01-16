import { useState } from "react";

const CardItems = ({
  name,
  birthday,
  occupation,
  img,
  status,
  appearance,
  portrayed,
  nickname,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <div>
        <img src={img} alt={name} style={{ width: "240px", height: "288px" }} />
        <button
          aria-label="toggle infos card"
          type="button"
          className={`${
            active
              ? "absolute top-0 right-0 p-3 transform transition duration-500 -rotate-15"
              : "absolute top-0 right-0 p-3 transform duration-500 rotate-180"
          }`}
          onClick={() => setActive(!active)}
        >
          {active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#fff"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#fff"
              className="bi bi-list-nested"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}
        </button>
      </div>
      {/*transition in et out permet l'affichage des informations des personnages (voir fichier index.css) */}
      <div
        className={`${
          active ? "transition-in overflow-auto" : "transition-out"
        } `}
      >
        <div className="border-b-2 w-48 flex m-auto justify-center">
          <h1 className="text-center p-2 font-semibold text-2xl">{name}</h1>
        </div>
        <ul className="space-y-1 py-2 px-1">
          <li className="pl-3">
            <span className="font-bold">Actor Name: </span>
            {portrayed}
          </li>

          <li className="pl-3">
            <span className="font-bold">Birthday: </span>
            {birthday}
          </li>
          <li className="pl-3">
            <span className="font-bold">Status: </span>
            {status}
          </li>
          <li className="pl-3">
            <span className="font-bold">Nickname: </span>
            {nickname}
          </li>
          <li className="pl-3">
            <span className="font-bold">Occupation: </span>
            {occupation}
          </li>
          <li className="pl-3">
            <span className="font-bold">Appearance: </span>
            Seasons {appearance}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardItems;
