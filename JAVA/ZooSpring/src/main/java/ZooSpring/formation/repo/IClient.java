package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Client;



public interface IClient extends JpaRepository<Client, Integer> {
	
}
