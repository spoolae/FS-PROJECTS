import React from 'react';
import CONSTANTS from '../../constants';
import styles from './Advantage.module.sass';
import advantages from './advantage.json';

const Advantage = () => {
  const renderCard = ({ imgPath, imgAlt, title, content }, i) => (
    <article key={i} className={styles.card}>
      <img alt={imgAlt} src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgPath}`} />
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
  return (
    <section className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>{advantages.map(renderCard)}</div>
    </section>
  );
};

export default Advantage;
