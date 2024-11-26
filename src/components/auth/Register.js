import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Register = () => {
  const [iin, setIin] = useState(''); // Состояние для ввода ИИН
  const [errorMessage, setErrorMessage] = useState(''); // Для отображения ошибок
  const navigate = useNavigate(); // Для навигации между страницами

  // Обработчик формы
  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    if (iin.length !== 12 || !/^\d+$/.test(iin)) {
      setErrorMessage('Пожалуйста, введите корректный ИНН из 12 цифр.');
      return;
    }

    try {
      // Динамическая подстановка ИИН в запрос
      const response = await fetch(`http://127.0.0.1:8000/api/clients/${iin}/`, {
        method: 'GET', // Метод запроса (GET для проверки существования)
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          // Если ИИН не найден
          setErrorMessage('Пользователь с таким ИНН не найден.');
        } else {
          throw new Error(`Ошибка сервера: ${response.statusText}`);
        }
        return;
      }

      const data = await response.json();

      // Сохраняем данные в localStorage и переходим на страницу отображения
      localStorage.setItem('userIIN', iin);
      localStorage.setItem('userData', JSON.stringify(data)); // Сохраняем данные пользователя
      navigate('/videoInfo'); // Переход на страницу с информацией
    } catch (error) {
      console.error('Ошибка при проверке ИНН:', error);
      setErrorMessage('Произошла ошибка при проверке. Попробуйте снова позже.');
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card card-body rounded-3 card-digital p-sm-5">
              <div className="text-center mb-4">
                <h4>Укажите ваш ИНН , единый номер надогоплательщика</h4>
              </div>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="iinInput" className="form-label">
                    Номер ИНН
                  </label>
                  <input
                    type="text"
                    id="iinInput"
                    className="form-control input-group-lg"
                    value={iin}
                    onChange={(e) => setIin(e.target.value)} // Обновляем состояние
                    maxLength={12} // Ограничиваем ввод 12 символами
                  />
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Проверить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
