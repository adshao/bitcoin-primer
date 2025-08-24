import React from 'react';
import { useFormattedTranslation } from '../hooks/useFormattedTranslation';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { useSEO } from '../hooks/useSEO';
import './About.css';

const About = () => {
  const { t } = useFormattedTranslation('about');
  const { i18n } = useTranslation();
  const seoData = useSEO('about');

  return (
    <div className="about-page">
      <SEO {...seoData} />
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-grid-pattern"></div>
          <div className="about-gradient-orb"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-title">{t('title')}</h1>
          <p className="about-subtitle">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div className="intro-container">
          <div className="intro-content">
            <h2 className="intro-title">
              <span className="title-icon">₿</span>
              {t('intro.title')}
            </h2>
            <p className="intro-description">
              {t('intro.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles-container">
          <h2 className="section-title">{t('principles.title')}</h2>
          <div className="about-principles-list">
            <div className="principle-item">
              <div className="principle-number">01</div>
              <div className="principle-content">
                <h3>{t('principles.item1.title')}</h3>
                <p>{t('principles.item1.description')}</p>
              </div>
            </div>
            <div className="principle-item">
              <div className="principle-number">02</div>
              <div className="principle-content">
                <h3>{t('principles.item2.title')}</h3>
                <p>{t('principles.item2.description')}</p>
              </div>
            </div>
            <div className="principle-item">
              <div className="principle-number">03</div>
              <div className="principle-content">
                <h3>{t('principles.item3.title')}</h3>
                <p>{t('principles.item3.description')}</p>
              </div>
            </div>
            <div className="principle-item">
              <div className="principle-number">04</div>
              <div className="principle-content">
                <h3>{t('principles.item4.title')}</h3>
                <p>{t('principles.item4.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-contribute">
        <div className="contribute-container">
          <h2 className="section-title">{t('contribute.title')}</h2>
          <div className="contribute-content">
            <div className="contribute-text">
              <p>
                {t('contribute.description')}
              </p>
              <div className="contribute-cta">
                <a 
                  href="https://github.com/adshao/bitcoin-primer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <svg className="github-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('contribute.viewOnGithub')}
                </a>
                <span className="contribute-info">{t('contribute.repoUrl')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="contact-container">
          <h2 className="section-title">{t('contact.title')}</h2>
          <div className="contact-content">
            <p className="contact-description">
              {t('contact.description')}
            </p>
            <div className="contact-info">
              <a href={`mailto:${t('contact.email')}`} className="contact-email">
                <svg className="email-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {t('contact.email')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-disclaimer">
        <div className="disclaimer-container">
          <div className="disclaimer-box">
            <div className="disclaimer-icon">⚠️</div>
            <div className="disclaimer-content">
              <h3>{t('disclaimer.title')}</h3>
              <p>
                {t('disclaimer.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;