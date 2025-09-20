import './FooterStyle.css';


export default function Social_links({images}){
    return(
        <>
      {images.map((img, index) => (
        <div className="social_link rounded-circle d-inline p-3" key={index}>
          <img
            src={img.src}
            alt={img.alt }
            className="img-fluid social_img"
          />
        </div>
      ))}
    </>
    );
}