import PropTypes from "prop-types";
import { useState } from "react";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CakeCard = ({ id, imgSrc, title, tags, cakeLink, classes, price }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    addToCart({ id, imgSrc, title, tags, cakeLink, classes, price }); // id burada çok önemli
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className={
        "relative p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
      style={{ maxWidth: 320, margin: "auto" }}
    >
      <figure className="img-box aspect-square rounded-lg mb-3 relative z-10 max-w-full mx-auto">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover rounded-lg object-cover w-full h-full"
          style={{ display: "block" }}
        />
      </figure>

      <div className="flex items-center justify-between gap-3 mb-2 relative z-10 flex-wrap">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-1 truncate">{title}</h3>
          <div className="flex flex-wrap items-center gap-1 mb-1">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-6 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-2 rounded-lg whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-[#e84242] font-semibold text-base">{price} ₺</p>
        </div>

        <div className="w-9 h-9 rounded-lg grid place-items-center bg-green-800 text-zinc-950 shrink-0 mt-2 sm:mt-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            cake
          </span>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={added}
        className={`w-full mt-2 py-2 px-4 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 relative z-10
          ${
            added
              ? "bg-green-600 text-white cursor-default"
              : "bg-[#e84242] text-white hover:bg-[#c73030] active:bg-[#b42a2a]"
          }`}
      >
        {added ? (
          <>
            <FaCheck className="text-white" /> Sepete Eklendi
          </>
        ) : (
          <>
            <FaShoppingCart /> Sepete Ekle
          </>
        )}
      </button>

      <a
        href={cakeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0 pointer-events-auto"
        aria-label="Pasta detaylarını görüntüle"
      ></a>
    </div>
  );
};

CakeCard.propTypes = {
  id: PropTypes.string.isRequired, // id zorunlu ve string
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  cakeLink: PropTypes.string,
  classes: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default CakeCard;
