package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Intervention;

public interface IIntervention extends JpaRepository<Intervention, Integer> {
	
}
