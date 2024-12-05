import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const FaceNotFound = () => {
  const navigate = useNavigate();  // Добавляем useNavigate
  return (

    <div>
        <Header />
        <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold mb-4">Лицо не найдено !</h1>
                    <p>Попробуйте снова пройти проверку.</p>
                    <Link to="/LivenessQuickStartReact" className="btn btn-primary">Перейти </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FaceNotFound;
