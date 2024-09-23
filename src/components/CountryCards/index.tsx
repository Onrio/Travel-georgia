import "./style.css";

const country = [
  {
    name: "Italy",
    population: 58.94,
    capital: "Rome",
    about: `Italy's wine culture is a rich tapestry of history, tradition, and
              passion. With diverse regions, indigenous grapes, and time-honored
              winemaking methods, it offers a unique and unforgettable
              experience.`,
    image: "vineyards-italy.jpg",
  },
  {
    name: "France",
    population: 67.97,
    capital: "Paris",
    about: `France's wine culture is renowned for its rich history, 
              diverse regions, and world-class vineyards. From Bordeaux to Burgundy, 
              it celebrates tradition, craftsmanship, and the art of winemaking.`,
    image: "vineyards-France.jpg",
  },
  {
    name: "Georgia",
    population: 3.713,
    capital: "Tbilisi",
    about: `Georgia, the birthplace of wine, boasts an 8,000-year-old tradition 
            with unique qvevri winemaking. Its rich culture blends ancient techniques, 
            diverse grape varieties, and vibrant wine festivals.`,
    image: "vineyards-georgia.jpg",
  },
];

function CountryCards() {
  return (
    <section className="container">
      <h2 className="section-title">Discover Wine Destinations</h2>
      <div className="country-card-row">
        {country.map((country) => (
          <div key={country.name} className="country-card">
            <img
              src={`/src/assets/vineyards/${country.image}`}
              alt={`vineyard in ${country.name}`}
            />
            <div className="card-body">
              <h3>{country.name}</h3>
              <div className="info-row">
                <span className="capital">{country.capital}</span>
                <span>{country.population}M</span>
              </div>
              <p>{country.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CountryCards;
