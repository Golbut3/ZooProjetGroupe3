package ZooSpring.formation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import ZooSpring.formation.model.Reservation;
import ZooSpring.formation.repo.IReservation;


@RestController
@RequestMapping("/api/reservation")
public class ReservationApiController {

	@Autowired
	private IReservation repoReservation;
	
	@GetMapping("")
	public List<Reservation> findAll() {
		return this.repoReservation.findAll();
	}
	
	@GetMapping("/{id}")
	public Reservation findById(Integer id) {
		return repoReservation.findById(id).get();
		}
	
	@PostMapping("")
	public Reservation create(@RequestBody Reservation reservation, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Matière invalide");
		}

		reservation = repoReservation.save(reservation);

		return reservation;
	}

	
	@PutMapping("/{id}")
	public Reservation update(@RequestBody Reservation reservation, @PathVariable int id) {
		reservation = repoReservation.save(reservation);

		return reservation;
	}
	
	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!repoReservation.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		repoReservation.deleteById(id);
	}
}
