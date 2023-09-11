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

import ZooSpring.formation.model.Materiel;
import ZooSpring.formation.model.Reservation;
import ZooSpring.formation.repo.IMateriel;


@RestController
@RequestMapping("/api/materiel")
public class MaterielApiController {

	@Autowired
	private IMateriel repoMateriel;
	
	@GetMapping("")
	public List<Materiel> findAll() {
		return this.repoMateriel.findAll();
	}
	
	@GetMapping("/{id}")
	public Materiel findById(Integer id) {
		return repoMateriel.findById(id).get();
		}
	
	@PostMapping("")
	public Materiel create(@RequestBody Materiel materiel, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Materiel invalide");
		}

		materiel = repoMateriel.save(materiel);

		return materiel;
	}

	
	@PutMapping("/{id}")
	public Materiel update(@RequestBody Materiel materiel, @PathVariable int id) {
		materiel = repoMateriel.save(materiel);

		return materiel;
	}
	
	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!repoMateriel.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		repoMateriel.deleteById(id);
	}
}
