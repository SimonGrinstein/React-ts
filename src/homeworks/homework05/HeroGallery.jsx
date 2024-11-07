import { heroes } from "./data.js";
import HeroCard from "./HeroCard.jsx";

function HeroGallery() {
  return (
    <section className="grid-container">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          name={hero.name}
          isDark={hero.isDark}
          age={hero.age}
          image={hero.image}
          weapons={hero.weapons}
        />
      ))}
    </section>
  );
}

export default HeroGallery;
