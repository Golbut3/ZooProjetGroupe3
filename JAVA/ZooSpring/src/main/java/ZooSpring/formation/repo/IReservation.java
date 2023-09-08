package ZooSpring.formation.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ZooSpring.formation.model.Reservation;

public interface IReservation extends JpaRepository<Reservation, Integer> {
	
}
