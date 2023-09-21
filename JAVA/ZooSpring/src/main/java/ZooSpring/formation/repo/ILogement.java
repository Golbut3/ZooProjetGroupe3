package ZooSpring.formation.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ZooSpring.formation.model.Chalet;
import ZooSpring.formation.model.Logement;

public interface ILogement extends JpaRepository<Logement, Integer> {
	@Query("select c from Chalet c")
	List<Chalet> findAllChalet();
}
