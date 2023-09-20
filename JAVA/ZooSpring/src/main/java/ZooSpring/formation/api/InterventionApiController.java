package ZooSpring.formation.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import ZooSpring.formation.model.Intervention;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.IIntervention;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/intervention")
public class InterventionApiController {

	@Autowired
	private IIntervention repoIntervention;
	
	@GetMapping("")
	@JsonView(Views.Intervention.class)
	public List<Intervention> findAll() {
		return this.repoIntervention.findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.Intervention.class)
	public Intervention findById(Integer id) {
		return repoIntervention.findById(id).get();
		}
	
	@PostMapping("")
	@JsonView(Views.Intervention.class)
	public Intervention create(@RequestBody Intervention intervention, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Intervention invalide");
		}

		intervention = repoIntervention.save(intervention);

		return intervention;
	}

	
	@PutMapping("/{id}")
	@JsonView(Views.Intervention.class)
	public Intervention update(@RequestBody Intervention intervention, @PathVariable int id) {
		intervention= repoIntervention.save(intervention);

		return intervention;
	}
	
	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!repoIntervention.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		repoIntervention.deleteById(id);
	}
}
