import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // Проверка наличия userData в localStorage
  const isLoggedIn = localStorage.getItem('userData') !== null;

  // Обработчик выхода
  const handleLogout = () => {
    localStorage.removeItem('userData'); // Удаляем данные из localStorage
    localStorage.removeItem('userIIN'); // Если есть другие данные, их тоже можно удалить
    navigate('/register'); // Перенаправление на страницу регистрации
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">OYARBA</span>
          <img src="img/id.png" alt="Logo" />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          
          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                className="nav-link px-2 btn btn-link text-decoration-none"
              >
                <img src="img/Group-2.png" alt="Logout Icon" className="me-2" />
                Выйти
              </button>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default Header;
