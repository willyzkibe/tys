import React from 'react'
import { translate } from '../../../common/i18n';

const Hero = () => (
    <section className="hero">
        <div className="hero-inner section-container">

            <div className="hero-inner__content">
                <h1>{translate('Binary Bot has a new home')}</h1>
                <h2>
                    {translate('We’ve been Binary.com for 2 decades and it’s time for an exciting new chapter. Your favourite bot builder, Binary Bot, is now on Deriv, our new home. Come take a peek.')}
                </h2>
                <div className="btn-group">
                    <a href="https://bot.deriv.com">
                        <button className="l-btn primary">{translate('Take me to Binary Bot on Deriv')}</button>
                    </a>
                   
                </div>
            </div>
            <div className="hero-inner__placeholder">
                <a href=''>
                    <img className='hero-inner__binary_logo' src="image/binary.svg" />
                </a>
                <img src="image/laptop-1.webp" />
            </div>
        </div>
    </section>
);

export default Hero