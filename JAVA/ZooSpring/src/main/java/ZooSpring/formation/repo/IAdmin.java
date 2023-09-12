package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Admin;



public interface IAdmin extends JpaRepository<Admin, Integer> {
	
}
