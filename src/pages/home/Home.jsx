import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

//Translations
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Soy Derian Arias B.</span> Dev
          </h1>

          <p className="home__description">
          Desarrollador Full Stack, tengo experiencia en lenguajes de programación de alta demanda; mi biblioteca Favorita "React"
          con la creación de nuevas tecnologías innovadoras, como la creación de ecommerce con React, React-Native, Redux.
          Enfocado en crear experiencias limpias y amigables para el usuario. Me apasiona construir software
          excelente que mejore la vida de quienes me rodean.
          </p>

          <Link to="/about" className="button">
              Más sobre mí
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
