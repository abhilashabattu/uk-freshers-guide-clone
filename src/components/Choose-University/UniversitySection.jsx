import './UniversitySectionStyle.css';
import CityButton from './CityButton';

export default function UniversitySection() {

    let cities = [
        { id: 1, name: "ABERDEEN" },
        { id: 2, name: "BATH" },
        { id: 3, name: "BELFAST" },
        { id: 4, name: "BIRMINGHAM" },
        { id: 5, name: "BRISTOL" },
        { id: 6, name: "BRIGHTON" },
        { id: 7, name: "CAMBRIDGE" },
        { id: 8, name: "CANTERBURY" },
        { id: 9, name: "CARDIFF" },
        { id: 10, name: "CHESTER" },
        { id: 11, name: "COLCHESTER" },
        { id: 12, name: "COVENTRY" },
        { id: 13, name: "DERBY" },
        { id: 14, name: "DUNDEE" },
        { id: 15, name: "DURHAM" },
        { id: 16, name: "EDINBURGH" },
        { id: 17, name: "ESSEX" },
        { id: 18, name: "EXETER" },
        { id: 19, name: "GLASGOW" },
        { id: 20, name: "GLOUCESTER" },
        { id: 21, name: "HERTFORDSHIRE" },
        { id: 22, name: "HULL" },
        { id: 23, name: "KEELE" },
        { id: 24, name: "LANCASTER" },
        { id: 25, name: "LEEDS" },
        { id: 26, name: "LEICESTER" },
        { id: 27, name: "LINCOLN" },
        { id: 28, name: "LIVERPOOL" },
        { id: 29, name: "LONDON" },
        { id: 30, name: "LOUGHBOROUGH" },
        { id: 31, name: "MANCHESTER" },
        { id: 32, name: "NEWCASTLE" },
        { id: 33, name: "NORTHAMPTON" },
        { id: 34, name: "NORWICH" },
        { id: 35, name: "NOTTINGHAM" },
        { id: 36, name: "OXFORD" },
        { id: 37, name: "PLYMOUTH" },
        { id: 38, name: "PORTSMOUTH" },
        { id: 39, name: "PRESTON" },
        { id: 40, name: "READING" },
        { id: 41, name: "SHEFFIELD" },
        { id: 42, name: "SOUTHAMPTON" },
        { id: 43, name: "STIRLING" },
        { id: 44, name: "SWANSEA" },
        { id: 45, name: "WOLVERHAMPTON" },
        { id: 46, name: "YORK" }
    ];

    return (
        <div className='bg-university p-4' id="choose-university">
            <div className='hero-container gradient-university rounded-5 p-5 text-center'>
                <p className='whychoose-title mb-5 p-2'>CHOOSE YOUR UNIVERSITY CITY</p>

                <CityButton cities={cities} />

            </div>

        </div>
    );
}