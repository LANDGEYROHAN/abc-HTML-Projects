import { useState } from 'react';
import './ExplorePets.css';
import { Link } from 'react-router-dom';

function ExplorePets() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');

  const pets = [
    {
      id: 1,
      type: 'Dog',
      name: "Max",
      breed: "Golden Retriever",
      age: "2 Months",
      gender: "Male",
      price: "₹15,000",
      location: "Kurnool",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500"
    },
    {
      id: 2,
      type: 'Cat',
      name: "Luna",
      breed: "Persian Cat",
      age: "3 Months",
      gender: "Female",
      price: "₹12,000",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500"
    },
    {
      id: 3,
      type: 'Dog',
      name: "Rocky",
      breed: "German Shepherd",
      age: "4 Months",
      gender: "Male",
      price: "₹18,000",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500"
    },
    {
      id: 4,
      type: 'Dog',
      name: "Bella",
      breed: "Beagle",
      age: "3 Months",
      gender: "Female",
      price: "₹10,000",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500"
    }
  ];

  const filteredPets = pets.filter((pet) => {
    const searchTerm = search.trim().toLowerCase();
    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm) ||
      pet.breed.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'All' || pet.type === category;
    const matchesLocation = location === 'All' || pet.location === location;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="explore-page">

      <div className="explore-header">
        <h1>Explore Pets</h1>
        <p>Find your perfect companion at PawMart.</p>
      </div>

      <div className="pet-filters">
        <input
          type="text"
          placeholder="Search pet name or breed..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search pet name or breed"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by pet category"
        >
          <option value="All">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>

        <select
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          aria-label="Filter by location"
        >
          <option value="All">All Locations</option>
          <option value="Kurnool">Kurnool</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      <p className="result-count">{filteredPets.length} pets found</p>

      <div className="pet-grid">
        {filteredPets.map((pet) => (
          <div className="pet-card" key={pet.id}>

            <img src={pet.image} alt={pet.breed} />

            <div className="pet-info">
              <h2>{pet.name}</h2>
              <h4>{pet.breed}</h4>

              <p>Age: {pet.age}</p>
              <p>Gender: {pet.gender}</p>
              <p>Location: {pet.location}</p>

              <h3>{pet.price}</h3>

              <Link to={`/pet/${pet.id}`}>
  <button>View Details</button>
</Link>
            </div>

          </div>
        ))}
      </div>
      {filteredPets.length === 0 && (
  <p>No pets found. Try another search.</p>
)}

    </div>
  );
}

export default ExplorePets;
