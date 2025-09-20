import './WhyChooseSectionStyle.css';

export default function WhyChoose_Card({ cardData }) {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                {cardData.map((item) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                        <div className="card bg-card text-center p-3 rounded-4 h-100">
                            <img
                                src={item.image}
                                className="card-img-top w-25 m-auto mt-4"
                                alt={item.card_title}
                            />
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold text-FFD700 my-3 p-1">
                                    {item.card_title}
                                </h5>
                                <p className="lh-base card-description my-2">
                                    {item.card_description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
