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

import ZooSpring.formation.model.Logement;
import ZooSpring.formation.model.Materiel;
import ZooSpring.formation.repo.ILogement;


@RestController
@RequestMapping("/api/logement")
public class LogementApiController {

	@Autowired
	private ILogement repoLogement;
	
	@GetMapping("")
	public List<Logement> findAll() {
		return this.repoLogement.findAll();
	}
	
	@GetMapping("/{id}")
	public Logement findById(Integer id) {
		return repoLogement.findById(id).get();
		}
	
	@PostMapping("")
	public Logement create(@RequestBody Logement logement, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Logement invalide");
		}

		logement = repoLogement.save(logement);

		return logement;
	}

	
	@PutMapping("/{id}")
	public Logement update(@RequestBody Logement logement, @PathVariable int id) {
		logement = repoLogement.save(logement);

		return logement;
	}
	
	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!repoLogement.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		repoLogement.deleteById(id);
	}
}
