import React from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = (  {}  ) => {

  const email = 'laboraldevderian@gmail.com';


  return (
    <section className="contact section">
      <h2 className="section__title">
        Entra <span>Toca</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">No seas tímido(@) 😃!</h3>

          <p className="contact__description">
          No dudes en contactarme. Siempre estoy abierto a conversar sobre nuevos
          proyectos, ideas creativas u oportunidades para ser parte de tu visión
          en la empresa que lo requiera.
          </p>Envia tu propuesta...  👇

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <span className="info__title">Mail</span>
              <div>
                <a href={ `mailto:${ email }`} >
                  <h4>{  email }</h4>
                </a>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">¿Chateamos?...  ✍</span>
                <h4 className="info__desc">+57 310-4038622</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100009022031603"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/derian-development/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/derian-2022"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/3104038622?text=Hola%20Soy Derian%20Developer%20Web%20Colombiano%20FullStack" target="_blank"
              className="contact__social-link"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
              Enviar mensaje
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
