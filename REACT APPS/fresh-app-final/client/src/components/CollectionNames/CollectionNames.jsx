import React, { useState } from 'react';
import cx from 'classnames';
import styles from './CollectionNames.module.scss';

const namesBtn = [
  { id: 1, name: 'top categories' },
  { id: 2, name: 'top industry' },
  { id: 3, name: 'top ideas' },
];

const CollectionNames = () => {
  const [idBtn, setIdBtn] = useState(1);

  const renderBtn = ({ id, name }) => {
    const classNames = cx(styles.btn, {
      [styles.active]: id === idBtn,
    });
    return (
      <button key={id} onClick={() => setIdBtn(id)} className={classNames}>
        {name}
      </button>
    );
  };

  return (
    <section className={styles.container}>
      <h2>Largest Collection of Brandable Names</h2>
      <p>
        Explore themed brand name collections created by our experienced team of
        branding experts
      </p>
      {namesBtn.map(renderBtn)}
    </section>
  );
};

export default CollectionNames;
