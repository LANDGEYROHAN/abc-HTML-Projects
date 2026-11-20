
package pawmart_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pawmart_backend.entity.Pet;

public interface PetRepository extends JpaRepository<Pet, Long> {

}
