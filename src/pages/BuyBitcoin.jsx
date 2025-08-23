import React from 'react';
import { useFormattedTranslation } from '../hooks/useFormattedTranslation';
import './BuyBitcoin.css';
import ibkrLogo from '../assets/logos/ibkr.svg';
import binanceLogo from '../assets/logos/binance.png';
import coinbaseLogo from '../assets/logos/coinbase.svg';
import krakenLogo from '../assets/logos/kraken.svg';

const BuyBitcoin = () => {
  const { t } = useFormattedTranslation('buyBitcoin');

  const etfBroker = {
    name: t('ibkr.name'),
    englishName: t('ibkr.englishName'),
    logo: ibkrLogo,
    description: t('ibkr.description'),
    features: t('ibkr.features', { returnObjects: true }),
    link: 'https://www.interactivebrokers.com'
  };

  const etf = {
    ticker: t('etf.ticker'),
    name: t('etf.name'),
    provider: t('etf.provider'),
    description: t('etf.description')
  };

  const exchanges = [
    {
      name: t('binance.name'),
      logo: binanceLogo,
      description: t('binance.description'),
      features: t('binance.features', { returnObjects: true }),
      link: 'https://www.binance.com',
      bgColor: '#FCD535'
    },
    {
      name: t('coinbase.name'),
      logo: coinbaseLogo,
      description: t('coinbase.description'),
      features: t('coinbase.features', { returnObjects: true }),
      link: 'https://www.coinbase.com',
      bgColor: '#0052FF'
    },
    {
      name: t('kraken.name'),
      logo: krakenLogo,
      description: t('kraken.description'),
      features: t('kraken.features', { returnObjects: true }),
      link: 'https://www.kraken.com',
      bgColor: '#5741D9'
    }
  ];

  return (
    <div className="buy-bitcoin">
      {/* Hero Section */}
      <section className="buy-hero">
        <div className="buy-hero-background">
          <div className="buy-grid-pattern"></div>
          <div className="buy-gradient-orb"></div>
        </div>
        <div className="buy-hero-content">
          <h1 className="buy-title">{t('title')}</h1>
          <p className="buy-subtitle">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="buy-content">
        <div className="buy-container">
          
          {/* Decision Helper */}
          <div className="decision-helper">
            <h3>{t('howToChoose')}</h3>
            <div className="decision-flow">
              <div className="decision-box etf">
                <h4>{t('ifYou')}</h4>
                <p>{t('etfChoice')}</p>
              </div>
              <div className="decision-divider">{t('or')}</div>
              <div className="decision-box exchange">
                <h4>{t('ifYou')}</h4>
                <p>{t('exchangeChoice')}</p>
              </div>
            </div>
            <div className="decision-arrow">↓</div>
          </div>
          
          {/* Two Column Layout */}
          <div className="options-grid">
            
            {/* Option 1: Bitcoin ETF */}
            <div className="option-column">
              <div className="option-header">
                <div className="option-badge">{t('option1')}</div>
                <h2 className="option-title">{t('bitcoinETF')}</h2>
                <span className="recommended">{t('recommended')}</span>
              </div>
              <p className="option-subtitle">{t('suitableForMost')}</p>
              
              <div className="option-content">
                <p className="option-description">
                  {t('etfDescription')}
                </p>

                {/* ETF Product */}
                <div className="product-highlight">
                  <div className="product-info">
                    <div className="ticker">{etf.ticker}</div>
                    <div className="product-details">
                      <div className="product-name">{etf.name}</div>
                      <div className="product-meta">{etf.provider} · {etf.description}</div>
                    </div>
                  </div>
                </div>

                {/* Broker */}
                <div className="broker-compact">
                  <div className="broker-main">
                    <div className="logo-wrapper">
                      <img 
                        src={etfBroker.logo} 
                        alt={etfBroker.name}
                        className="company-logo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="logo-fallback" style={{display: 'none'}}>IBKR</div>
                    </div>
                    <div className="broker-info-compact">
                      <h4>{etfBroker.name}</h4>
                      <p>{etfBroker.description}</p>
                    </div>
                  </div>
                  <ul className="features-compact">
                    {etfBroker.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a href={etfBroker.link} className="action-button primary">
                    {t('openAccount')}
                  </a>
                </div>

                <div className="advantages-compact">
                  <h4>{t('advantages')}</h4>
                  <ul>
                    {t('etfAdvantages', { returnObjects: true }).map((advantage, idx) => (
                      <li key={idx}>{advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 2: Crypto Exchanges */}
            <div className="option-column">
              <div className="option-header">
                <div className="option-badge secondary">{t('option2')}</div>
                <h2 className="option-title">{t('exchanges')}</h2>
              </div>
              <p className="option-subtitle">{t('suitableForTech')}</p>
              
              <div className="option-content">
                <p className="option-description">
                  {t('exchangeDescription')}
                </p>

                {/* Exchanges */}
                <div className="exchanges-compact">
                  {exchanges.map((exchange, index) => (
                    <div key={index} className="exchange-compact">
                      <div className="exchange-main">
                        <div className="logo-wrapper">
                          <img 
                            src={exchange.logo} 
                            alt={exchange.name}
                            className="company-logo"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <div className="logo-fallback" style={{display: 'none'}}>{exchange.name.slice(0, 2)}</div>
                        </div>
                        <div className="exchange-info-compact">
                          <h4>{exchange.name}</h4>
                          <p>{exchange.description}</p>
                        </div>
                      </div>
                      <ul className="features-compact">
                        {exchange.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <a href={exchange.link} className="action-button secondary">
                        {t('goRegister')}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="advantages-compact">
                  <h4>{t('advantages')}</h4>
                  <ul>
                    {t('exchangeAdvantages', { returnObjects: true }).map((advantage, idx) => (
                      <li key={idx}>{advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Disclaimer */}
          <div className="risk-compact">
            <h4>⚠️ {t('riskWarning')}</h4>
            <p>
              {t('riskDescription')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyBitcoin;