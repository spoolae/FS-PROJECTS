import React from 'react';
import styles from './PricingPage.module.scss';
import Header from '../../components/Header';

const PricingPage = () => {
  const renderPricingItem = () => {
    return (
      <div className={styles['pricingItemContainer']}>
        <div className={styles['boxContainer']}>
          <h2>Bronze</h2>
          <p>Branding on a budget</p>
          <h3>US$299</h3>
        </div>
        <div className={styles['benefitsContainer']}>
          <p>
            Prize to Winner - $135 (Included){' '}
            <label>
              Paid to the winning creative at the end of contest. This amount is
              already included in your package price.
            </label>
          </p>
          <div>
            <p>Validation Services & Upgrades ($39 value) </p>
            <ul>
              <li> Matching .com URL</li>
            </ul>
          </div>
          <p>Expected 300+ Entries</p>
        </div>
        <button>✔ Start</button>
      </div>
    );
  };

  return (
    <div className={styles['pricingPageContainer']}>
      <Header />
      <h2>
        Pricing for <span>Name</span>
      </h2>
      <div className={styles['pricingItems']}>
        {renderPricingItem()}
        {renderPricingItem()}
        {renderPricingItem()}
        {renderPricingItem()}
      </div>
    </div>
  );
};

export default PricingPage;
