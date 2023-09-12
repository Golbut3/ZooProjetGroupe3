package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Admin;
import ZooSpring.formation.model.Interet;



public interface IInteret extends JpaRepository<Interet, Integer> {
	
}
