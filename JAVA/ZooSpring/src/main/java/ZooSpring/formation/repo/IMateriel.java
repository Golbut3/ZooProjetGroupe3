package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Materiel;

public interface IMateriel extends JpaRepository<Materiel, Integer> {
	
}
