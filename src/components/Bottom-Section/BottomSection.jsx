import './BottomSectionStyle.css';

export default function BottomSection() {
    return (
        <div className='bg-bottomSection py-5'>
            <div className='bottom_container text-center p-3'>
                <p className='bottom-title mt-4'>THE UK'S BIGGEST FRESHERS TOUR</p>
                <p className='fs-4 mb-3'>Join thousands of students across the country for Freshers Week 2025</p>

                <div className='d-flex justify-content-center gap-3 p-2 mb-5'>

                    <button className='btn bg-dark text-white rounded-pill py-3 px-4  fw-bold'>FIND EVENTS</button>


                    <button className='btn bg-transparent border border-3 border-dark rounded-pill py-3 px-4  fw-bold'>JOIN GROUPS</button>

                </div>
            </div>
        </div>
    );
}