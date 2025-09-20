

export default function CityButton({ cities }) {

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {cities.map((item) => (
                <a
                    key={item.id}
                    href="#"
                    className=" bg-white px-4 py-3 fw-bold rounded-4 m-2 btn-city"
                >
                    {item.name}
                </a>
            ))}
        </div>
    );




}