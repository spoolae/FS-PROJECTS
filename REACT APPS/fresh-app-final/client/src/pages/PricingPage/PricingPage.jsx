import React from 'react';
import styles from './PricingPage.module.scss';
import Header from '../../components/Header';
import pricingList from './pricingList';
import PricingItem from '../../components/PricingItem/PricingItem';

const PricingPage = () => {
  const renderPricingItem = (item) => (
    <PricingItem pricingItem={item} key={item.name} />
  );

  return (
    <div className={styles['pricingPageContainer']}>
      <Header />
      <h2>
        Pricing for <span>Name</span>
      </h2>
      <div className={styles['pricingItems']}>
        {pricingList.map(renderPricingItem)}
      </div>
    </div>
  );
};

export default PricingPage;
