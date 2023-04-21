import "./styles.css";
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
const socialIcons = [
  {
    id: 0,
    link: "https://facebook.com/",
    icon: facebook,
    alt: "facebook",
  },
  {
    id: 1,
    link: "https://twitter.com/",
    icon: twitter,
    alt: "twitter",
  },
  {
    id: 0,
    link: "https://linkedin.com/",
    icon: linkedin,
    alt: "linkedin",
  },
  {
    id: 0,
    link: "https://instagram.com/",
    icon: instagram,
    alt: "instagram",
  },
  {
    id: 0,
    link: "https://youtube.com/",
    icon: youtube,
    alt: "youtube",
  },
];
const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="wrapper">
      <footer className="footer">
        <p className="text">© {currentYear} The Great University</p>
        <div className="social-icons">
          {socialIcons.map((item) => (
            <a href={item.link} key={item.id}>
              <img
                src={item.icon}
                alt={item.alt}
                style={{ width: "2rem", height: "2rem" }}
              />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
