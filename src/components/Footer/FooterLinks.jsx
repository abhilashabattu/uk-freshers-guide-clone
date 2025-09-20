import './FooterStyle.css';

export default function FooterLinks({ heading, links }) {
  return (
    <div className="footer-links">
      <p className="fw-bold fs-5 text-FFD700 footer-title">{heading}</p>
      <ul className="text-CCCCCC fs-15 list-unstyled">
        {links.map((link, index) => (
          <li key={index} className='my-2 '>{link}</li>
        ))}
      </ul>
    </div>
  );
}
