import './FooterStyle.css';
import Social_links from './social_links';
import FooterLinks from './FooterLinks';

import notebook from '../../assets/notebook.png';
import Instagram from '../../assets/Instagram.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';

export default function Footer() {

    const socialImages = [
        { src: notebook, alt: 'Notebook' },
        { src: Instagram, alt: 'Instagram' },
        { src: twitter, alt: 'Twitter' },
        { src: tiktok, alt: 'TikTok' },
        { src: youtube, alt: 'YouTube' }
    ];

    const quickLinks = ["Home", "Events", "Groups", "Blogs", "Contact Us"];
    const popularCities = ["Aberdeen", "London","Manchester","Birmingham","Leeds","Liverpool","Bristol","Edinburgh","Glasgow", "Nottingham"]

    return (
        <div className='footer_container '>
            <div className='container p-5'>
                <div className='row g-5 mb-5'>
                    <div className='col-3'>
                        <p className='text-white uk_title fs-4'>UK <br />FRESHERS <br />GUIDE</p>
                        <p className='text-CCCCCC fs-15'>The UK's biggest and most trusted freshers guide. Connecting students with the best events, experiences, and communities across the country.</p>

                        <div className='d-flex gap-4 flex-wrap'>
                            <Social_links images={socialImages} />
                        </div>
                    </div>

                    <div className='col-3'>
                        <FooterLinks heading="QUICK LINKS" links={quickLinks} />
                    </div>

                    <div className='col-3'>
                         <FooterLinks heading="POPULAR CITIES" links={popularCities} />
                    </div>

                    <div className='col-3'>
                        <p className='fw-bold fs-5 text-FFD700 footer-title'>STAY CONNECTED</p>
                        <div className='d-flex gap-3 mb-3'>
                            <span>📧</span>
                            <a href="mailto:admin@ukfreshersguide.com" className='text-CCCCCC fs-15'>admin@ukfreshersguide.com</a>
                        </div>
                        <div className='d-flex gap-3 mb-4'>
                            <span>📱</span>
                            <a href="tel:+91 83023 25363" className='text-CCCCCC fs-15'>+91 83023 25363</a>
                        </div>

                       <p className='fw-bold fs-6 text-FFD700 m-0'>Newsletter</p>
                       <p className='text-CCCCCC fs-15 '>Get the latest freshers updates!</p>

                       <input type="email" placeholder='Enter your email' className='text-white fs-15 p-3 email-input mb-3' />
                       <button className='btn bg-btn p-3 rounded-4 fw-bold w-100'> SUBSCRIBE</button>
                    </div>
                </div>

                <div className='border-CCCCCC d-flex justify-content-between align-item-center pt-5'>
                    <div className='p-0 m-0'>
                        <p className='text-CCCCCC fs-15 p-0 m-0'>© 2025 UK Freshers Guide. All rights reserved.</p>
                    </div>
                    <div className='p-0 m-0'>
                        <a className='text-CCCCCC fs-15 px-3' href="#">Privacy Policy</a>
                        <a className='text-CCCCCC fs-15 px-3' href="#">Terms of Use</a>
                        <a className='text-CCCCCC fs-15 px-3' href="#">Community Rules</a>
                    </div>
                </div>
            </div>
        </div>
    );
}