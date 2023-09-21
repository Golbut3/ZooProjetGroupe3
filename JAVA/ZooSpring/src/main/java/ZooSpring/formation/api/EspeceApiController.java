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

import ZooSpring.formation.model.Espece;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.IEspece;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/espece")
public class EspeceApiController {

	@Autowired
	private IEspece repoEspece;
	
	@GetMapping("")
	@JsonView(Views.Espece.class)
	public List<Espece > findAll() {
		return this.repoEspece .findAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(Views.Espece.class)

	public Espece  findById(@PathVariable Integer id) {
		return repoEspece.findById(id).get();
		}
	
	@PostMapping("")
	@JsonView(Views.Espece.class)
	public Espece  create(@RequestBody Espece  espece , BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Espece invalide");
		}

		espece = repoEspece.save(espece);

		return espece;
	}

	
	@PutMapping("/{id}")
	@JsonView(Views.Espece.class)
	public Espece update(@RequestBody Espece espece, @PathVariable int id) {
		espece= repoEspece.save(espece);

		return espece;
	}
	
	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!repoEspece.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		repoEspece.deleteById(id);
	}
}
