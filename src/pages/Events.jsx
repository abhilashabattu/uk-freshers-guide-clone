import './EventsStyle.css';

export default function Events() {
    return (
        <div className="bg-eventsection p-5 ">
            <div className="hero-container  gradient-bg  rounded-5 text-center fw-bold p-4 mb-5">
                <p className='event-title my-5 '>FRESHERS EVENTS 2025</p>

                <div className='px-5'>
                    <p className='text-white text-center px-5 mt-2 lh-base fs-22'>Discover the most epic freshers events across the UK!
                        legendary club nights to cultural festivals, comedy shows to live music - we've got your social calendar sorted.
                        Book your tickets now and make memories that will last a lifetime!
                    </p>

                    <span className='party_icon'>🎉</span>


                </div>

            </div>


            {/* Filter Section */}

            <div className='hero-container rounded-5 filter-section p-5 mt-2'>
                <p className='text-FFD700 fw-700 fs-2 text-center'>FIND YOUR PERFECT EVENT</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    {/* Search Input */}
                    <input
                        type="text"
                        className="form-control search-pill"
                        placeholder="Search events..."
                    />

                    {/* City Dropdown */}
                    <select className="form-select search-pill">
                        <option>All Cities</option>
                        <option>London</option>
                        <option>Manchester</option>
                        <option>Birmingham</option>
                    </select>

                    {/* Type Dropdown */}
                    <select className="form-select search-pill">
                        <option>All Types</option>
                        <option>Concert</option>
                        <option>Festival</option>
                        <option>Comedy</option>
                    </select>
                </div>
            </div>
        </div>
    );
}