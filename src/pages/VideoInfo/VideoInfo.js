import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const VideoInfo = () => {
  
  const navigate = useNavigate(); // Используем navigate для перенаправления

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="card card-body rounded-3 card-digital p-sm-5">
                    <div className="text-center mb-4">
                        <h4 className="mb-3">Видео-проверка</h4>
                        <p className="mt-4">Для того,чтобы убедиться, что это действительно вы, на устройстве откроется камера, гды мы попросим показать лицо</p>
                    </div>
                    <form className="">
                        <div className="d-grid">
                            <Link to="/LivenessQuickStartReact" className="btn btn-lg btn-primary">Начать </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default VideoInfo;
