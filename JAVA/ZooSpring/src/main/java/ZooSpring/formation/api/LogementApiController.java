package ZooSpring.formation.api;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import ZooSpring.formation.model.Logement;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.ILogement;
import jakarta.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/logement")
public class LogementApiController {


	private ILogement daoLogement;
	
	public LogementApiController(ILogement daoLogement) {
		super();
		this.daoLogement = daoLogement;
	}

	
	@GetMapping("")
	@JsonView(Views.Logement.class)
	public List<Logement> findAll() {
		return this.daoLogement.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.Logement.class)
	public Logement findById(@PathVariable Integer id) {
		return daoLogement.findById(id).get();
		}
	
	@PostMapping("")
	@JsonView(Views.Logement.class)
	public Logement create(@Valid @RequestBody Logement logement, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Logement invalide");
		}

		logement = daoLogement.save(logement);

		return logement;
	}

	
	@PutMapping("/{id}")
	@JsonView(Views.Logement.class)
	public Logement update(@RequestBody Logement logement, @PathVariable int id) {
		logement = daoLogement.save(logement);

		return logement;
	}
	
	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoLogement.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoLogement.deleteById(id);
	}
}
