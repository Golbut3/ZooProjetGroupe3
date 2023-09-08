package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Animal;

public interface IAnimal extends JpaRepository<Animal, Integer> {
	
}
