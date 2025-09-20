import './studentTrustedStyle.css';


export default function StudentTrusted() {
    return (
        <div className='bg-trusted p-4' id="student-trusted">
            <div className='hero-container gradient-container rounded-5 p-5 text-center'>
                <p className='trusted-title mb-5 p-2'>TRUSTED BY STUDENTS NATIONWIDE</p>

                <div className='row g-4 mt-3 p-2' >
                    <div className='col-3 text-center'>
                        <p className='stat-numbers m-0 p-0'>500K+</p>
                        <p className='stat-title fs-5 '>STUDENTS CONNECTED</p>
                    </div>

                    <div className='col-3 text-center'>
                        <p className='stat-numbers m-0 p-0'>1000+</p>
                        <p className='stat-title fs-5 '>EVENTS LISTED</p>
                    </div>

                    <div className='col-3 text-center'>
                        <p className='stat-numbers m-0 p-0'>150K+</p>
                        <p className='stat-title fs-5 '>UNIVERSITIES</p>
                    </div>

                    <div className='col-3 text-center'>
                        <p className='stat-numbers m-0 p-0'>50+</p>
                        <p className='stat-title fs-5 '>CITIES COVERED</p>
                    </div>
                </div>
            </div>


        </div>
    );
}