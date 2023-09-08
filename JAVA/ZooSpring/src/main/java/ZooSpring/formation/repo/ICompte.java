package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Compte;

public interface ICompte extends JpaRepository<Compte, Integer> {
	
}
