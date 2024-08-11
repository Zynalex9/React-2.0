import { Link } from "react-router-dom";

export const Header = ({ heading, subHeading }) => {
  return (
    <section className="header">
      <nav>
        <div className="headings">
        {heading}

        </div>
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/joke" className="link">Jokes</Link>
        </div>
      </nav>
      <h1 data-testid="heading">{heading}</h1>
      <p data-testid="subHeading">{subHeading}</p>
    </section>
  );
};
