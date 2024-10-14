export const Hero = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className=" h-[200px]  flex justify-center items-center mx-auto text-4xl font-bold">
      <h1>
        {planets.map(
          (planet, key) =>
            planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
        )}
      </h1>
    </div>
  );
};
