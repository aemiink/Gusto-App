import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity, clearCart } = useCart();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleClearClick = () => setConfirmClear(true);
  const confirmClearCart = () => {
    clearCart();
    setConfirmClear(false);
  };
  const cancelClearCart = () => setConfirmClear(false);
  const handlePayment = () => alert("Ödeme sayfasına yönlendiriliyorsunuz...");
  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    clearCart();
    setTimeout(() => {
      setOrderConfirmed(false);
      setShowOrders(false);
    }, 2500);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 dark:from-black dark:to-black/0">
        <div className="max-w-screen-2xl w-full mx-auto px-3 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.jpg"
              width={40}
              height={40}
              alt="Gusto Logo"
              className="rounded-full"
            />
            <span className="text-white text-lg font-bold hidden sm:inline">Gusto</span>
          </a>

          <div className="relative md:justify-self-center">
            <button
              className="menu-btn md:hidden text-white"
              onClick={() => setNavOpen((prev) => !prev)}
              aria-label="Menüyü Aç/Kapat"
            >
              <span className="material-symbols-rounded text-3xl">
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            <Navbar navOpen={navOpen} />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => setShowOrders(true)}
              className="relative p-3 bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white rounded-full hover:scale-110 transition-transform shadow-md"
              title="Siparişlerim"
            >
              <span className="material-symbols-rounded text-xl">shopping_bag</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-2 py-[2px] font-semibold shadow-lg">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </button>

            <a
              href="https://online.pubhtml5.com/dltv/modp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#e84242] hover:bg-[#d73333] text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg transition-all duration-300"
            >
              <span className="material-symbols-rounded text-base">menu_book</span>
              Dijital Menü
            </a>

            <button
              onClick={toggleTheme}
              className="bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white p-3 rounded-full transition hover:rotate-12 shadow-md"
              title="Tema Değiştir"
              aria-pressed={isDark}
            >
              <span className="text-xl">{isDark ? "☀️" : "🌙"}</span>
            </button>
          </div>
        </div>
      </header>

      {showOrders && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center relative">
            <h2 className="text-2xl font-extrabold mb-6 text-zinc-900 dark:text-white">
              Siparişlerim
            </h2>

            {orderConfirmed ? (
              <p className="text-green-500 font-bold text-xl animate-pulse">
                🎉 Siparişiniz alınmıştır!
              </p>
            ) : cartItems.length === 0 ? (
              <p className="text-zinc-600 dark:text-zinc-300 text-lg">Henüz sipariş verilmedi. 🧁</p>
            ) : (
              <>
                <ul className="text-zinc-900 dark:text-zinc-200 text-left max-h-72 overflow-y-auto space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="border-b border-zinc-300 dark:border-zinc-700 pb-3 flex justify-between items-center"
                    >
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.tags.join(", ")}</p>
                        <p className="text-[#e84242] font-semibold mt-1">
                          {item.price} ₺ x {item.quantity} = {item.price * item.quantity} ₺
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-700 shadow-md transition"
                          aria-label={`Decrease quantity of ${item.title}`}
                        >
                          -
                        </button>

                        <span className="text-lg font-medium">{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-4 py-1 rounded-full bg-green-500 text-white hover:bg-green-700 shadow-md transition"
                          aria-label={`Increase quantity of ${item.title}`}
                        >
                          +
                        </button>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 ml-5 text-2xl rounded-full transition"
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          <span className="material-symbols-rounded select-none">delete</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                {!confirmClear ? (
                  <button
                    onClick={handleClearClick}
                    className="mb-4 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
                  >
                    Sepeti Temizle
                  </button>
                ) : (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 rounded-xl text-red-800 dark:text-red-300 font-semibold">
                    <p className="mb-3 text-center text-base">
                      Sepeti temizlemek istediğinizden emin misiniz?
                    </p>
                    <div className="flex justify-center gap-5">
                      <button
                        onClick={confirmClearCart}
                        className="px-5 py-2 rounded-full bg-red-700 hover:bg-red-800 text-white font-semibold shadow-md transition"
                      >
                        Evet, Temizle
                      </button>
                      <button
                        onClick={cancelClearCart}
                        className="px-5 py-2 rounded-full bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-900 dark:text-white font-semibold shadow-md transition"
                      >
                        İptal
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-6">
                  <button
                    onClick={handleConfirmOrder}
                    className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transition"
                  >
                    Sepeti Onayla
                  </button>

                  <button
                    onClick={handlePayment}
                    className="px-7 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transition"
                  >
                    Ödeme Yap
                  </button>
                </div>
              </>
            )}

            <button
              onClick={() => setShowOrders(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition text-3xl font-thin"
              aria-label="Siparişler popup kapat"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
