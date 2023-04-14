import React from 'react';
import styles from './PricingItem.module.scss';

const PricingItem = ({ pricingItem }) => {
  const {
    name,
    description,
    price,
    prize,
    validationValue,
    validationBenefits,
    entries,
    option,
    isManaged,
    color,
  } = pricingItem;

  return (
    <div className={styles['pricingItemContainer'] + ' ' + styles[color]}>
      <div className={styles['boxContainer']}>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
      <div className={styles['benefitsContainer']}>
        {isManaged ? (
          <>
            <p>
              Receive optimum results from your Platinum Contest by launching a
              Managed Contest Package and working one-on-one with an experienced
              Squadhelp Branding Consultant.
            </p>
            <p>
              With significantly more validation services, professional brief
              creation, and daily management of your contest by your Branding
              Expert, you'll receive an enhanced branding experience to closeout
              your branding project.
            </p>
            <p>
              Learn More about{' '}
              <a href="https://www.squadhelp.com/managed-contests">
                Managed Contest Service
              </a>
            </p>
          </>
        ) : (
          <>
            <p>{prize}</p>
            <div>
              <p>{validationValue}</p>
              <ul>
                {validationBenefits.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <p>{entries}</p>
            {option ? <p>{option}</p> : null}
          </>
        )}
      </div>
      <button>✔ Start</button>
    </div>
  );
};

export default PricingItem;
