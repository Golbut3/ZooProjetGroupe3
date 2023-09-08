package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Employe;

public interface IEmploye extends JpaRepository<Employe, Integer> {
	
}
