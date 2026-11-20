
package pawmart_backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pawmart_backend.entity.Pet;
import pawmart_backend.repository.PetRepository;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin(origins = "http://localhost:5173")
public class PetController {

    private final PetRepository petRepository;

    public PetController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    // Get all pets
    @GetMapping
    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    // Get pet by ID
    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable Long id) {
        return petRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Add a new pet
    @PostMapping
    public Pet addPet(@RequestBody Pet pet) {
        return petRepository.save(pet);
    }

    // Update pet details
    @PutMapping("/{id}")
    public ResponseEntity<Pet> updatePet(
            @PathVariable Long id,
            @RequestBody Pet updatedPet) {

        return petRepository.findById(id)
                .map(pet -> {
                    pet.setName(updatedPet.getName());
                    pet.setBreed(updatedPet.getBreed());
                    pet.setAge(updatedPet.getAge());
                    pet.setGender(updatedPet.getGender());
                    pet.setLocation(updatedPet.getLocation());
                    pet.setPrice(updatedPet.getPrice());
                    pet.setImage(updatedPet.getImage());
                    pet.setDescription(updatedPet.getDescription());
                    pet.setAvailable(updatedPet.isAvailable());

                    return ResponseEntity.ok(petRepository.save(pet));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete a pet
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePet(@PathVariable Long id) {
        if (!petRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        petRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
