package ZooSpring.formation.api;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.util.ReflectionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import ZooSpring.formation.model.Enclos;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.IEnclos;
import jakarta.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/enclos")
public class EnclosApiController {

	private IEnclos daoEnclos;

	public EnclosApiController(IEnclos daoEnclos) {
		super();
		this.daoEnclos = daoEnclos;
	}

	@GetMapping("")
	@JsonView(Views.Enclos.class)
	public List<Enclos> findAll() {
		return daoEnclos.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.Enclos.class)
	public Enclos findById(@PathVariable int id) {
		return daoEnclos.findById(id).get();
	}

	@PostMapping("")
	@JsonView(Views.Enclos.class)
	public Enclos create(@Valid @RequestBody Enclos enclos, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Enclos invalide");
		}

		enclos = daoEnclos.save(enclos);

		return enclos;
	}

	@PutMapping("/{id}")
	@JsonView(Views.Enclos.class)
	public Enclos update(@RequestBody Enclos enclos, @PathVariable int id) {
		enclos = daoEnclos.save(enclos);

		return enclos;
	}

	@PatchMapping("/{id}")
	@JsonView(Views.Enclos.class)
	public Enclos partialEdit(@RequestBody Map<String, Object> fields, @PathVariable int id) {
		Enclos enclos = this.daoEnclos.findById(id).get();
		
		fields.forEach((key, value) -> {
			Field field = ReflectionUtils.findField(Enclos.class, key);
			ReflectionUtils.makeAccessible(field);
			ReflectionUtils.setField(field, enclos, value);
		});
		
		Enclos enclosReturn = daoEnclos.save(enclos);
		
		return enclosReturn;
	}

	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoEnclos.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoEnclos.deleteById(id);
	}
}
