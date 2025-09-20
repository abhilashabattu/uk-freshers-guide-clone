import './HeroSectionStyle.css';

export default function HeroSection(){
    return(
        <div className='bg-hero p-5 ' id="hero-section">
            <div className='hero-container  gradient-bg  rounded-5 text-center fw-bold p-5'>
                    <p className='main-title mb-5'>FRESHERS WEEK <span className='year'>2025</span>
                    </p>
                  <button className='btn rounded-pill btn-SelectCity p-3 w-50 fs-1 mb-5'>SELECT YOUR CITY</button>
                  <p className='text-white text-center px-5 mt-2 lh-base fs-22'>The UK's biggest freshers guide for university students. Find exciting events, join amazing groups, read helpful blogs, and connect with students across the country. Your university journey starts here with over 500,000 students already part of our community!</p>
            </div>
        </div>
    );
}