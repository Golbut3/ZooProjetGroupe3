package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Espece;

public interface IEspece extends JpaRepository<Espece, Integer> {
	
}
