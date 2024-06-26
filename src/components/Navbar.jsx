// Navbar.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faUser, faBagShopping,faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="container max-w-[1240px] mr-auto ml-auto">
      <div className="bg-gray-100 p-2 text-sm flex justify-between items-center">
        <div>
          <span>
            Город: <span className="font-bold">Ташкент</span>
          </span>
          <span className="ml-4 cursor-pointer">Пункты выдачи</span>
        </div>
        <div>
          <span className="ml-4 cursor-pointer text-purple-600">
            Продавайте на Uzum
          </span>
          <span className="ml-4 cursor-pointer">Вопрос-ответ</span>
          <span className="ml-4 cursor-pointer">Мои заказы</span>
          <span className="ml-4 cursor-pointer">Русский</span>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white p-4 ">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="./images/uzum-market-logo.png"
            alt="Uzum Market Logo"
            className="h-10 mr-4"
          />
          <div className="px-4 py-2 bg-purple-100 text-purple-600 rounded cursor-pointer">
            Каталог
          </div>
        </div>
        <div className="flex items-center w-full max-w-lg mx-4 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Искать товары и категории"
            className="w-full px-4 py-2 border border-gray-300 rounded-l outline-none"
          />
          <button className="px-4 py-2 border border-gray-300 border-l-0 rounded-r bg-gray-100">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="flex items-center text-gray-600">
          <button className="ml-0 md:ml-4 mb-4 md:mb-0"><FontAwesomeIcon className="mr-2" icon={faUser} />Войти</button>
          <button className="ml-0 md:ml-4 mb-4 md:mb-0"> <FontAwesomeIcon className="mr-2" icon={faHeart} />Избранное</button>
          <button className="relative ml-0 md:ml-4">
          <FontAwesomeIcon className="mr-2" icon={faBagShopping}  />Корзина
            <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs rounded-full px-1.5">
              1
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
