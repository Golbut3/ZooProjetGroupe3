package ZooSpring.formation.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ZooSpring.formation.model.Reservation;

public interface IReservation extends JpaRepository<Reservation, Integer> {
	@Query("SELECT reservation.client, compte.id FROM `reservation`, `compte` where reservation.client = compte.id")
	List<Reservation> findAllResaByClient();
}
