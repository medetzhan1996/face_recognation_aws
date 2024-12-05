import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Home = () => {
 
  const navigate = useNavigate();  // Добавляем useNavigate
  const name = localStorage.getItem('detectedName'); 

  if (!name) {
    return <div>Нет данных для отображения.</div>;
  }
  return (

    <div>
        <Header />
        <div className="container">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold mb-4">Добро пожаловать , {name} !</h1>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
