package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Logement;

public interface ILogement extends JpaRepository<Logement, Integer> {
	
}
