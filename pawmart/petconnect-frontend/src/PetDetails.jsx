
import React from 'react';
import { useParams } from 'react-router-dom';
import './PetDetails.css';

const pets = [
  {
    id: 1,
    name: 'Max',
    breed: 'Golden Retriever',
    age: '2 Years',
    gender: 'Male',
    location: 'Hyderabad',
    price: '₹15,000',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600',
    about: 'Friendly, intelligent and active dog. A wonderful family companion.'
  },
  {
    id: 2,
    name: 'Luna',
    breed: 'Persian Cat',
    age: '1 Year',
    gender: 'Female',
    location: 'Bangalore',
    price: '₹10,000',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600',
    about: 'A beautiful Persian cat with a calm and affectionate personality.'
  },
  {
    id: 3,
    name: 'Rocky',
    breed: 'German Shepherd',
    age: '3 Years',
    gender: 'Male',
    location: 'Chennai',
    price: '₹18,000',
    image: 'https://images.unsplash.com/photo-1617181668756-68f6613051d0?auto=format&fit=crop&w=600',
    about: 'An intelligent, loyal and energetic dog.'
  },
  {
    id: 4,
    name: 'Bella',
    breed: 'Beagle',
    age: '8 Months',
    gender: 'Female',
    location: 'Hyderabad',
    price: '₹12,000',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600',
    about: 'A playful, friendly and curious companion.'
  }
];

function PetDetails() {
  const { id } = useParams();

  const pet = pets.find((item) => item.id === Number(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your enquiry has been submitted successfully!');
  };

  if (!pet) {
    return <h2>Pet not found!</h2>;
  }

  return (
    <div className="pet-details-container">
      <div className="pet-details">
        <img src={pet.image} alt={pet.name} />

        <div className="pet-info">
          <h1>{pet.name} - {pet.breed}</h1>
          <p><strong>Pet ID:</strong> {pet.id}</p>
          <p><strong>Age:</strong> {pet.age}</p>
          <p><strong>Gender:</strong> {pet.gender}</p>
          <p><strong>Location:</strong> {pet.location}</p>
          <p><strong>Vaccination:</strong> To be verified</p>
          <p><strong>Price:</strong> {pet.price}</p>

          <h3>About {pet.name}</h3>
          <p>{pet.about}</p>
        </div>
      </div>

      <div className="enquiry-section">
        <h2>Send an Enquiry</h2>
        <p>Interested in {pet.name}? Contact the owner.</p>

        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Your Message</label>
          <textarea placeholder="Write your enquiry..." rows="4" required />

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
}

export default PetDetails;
