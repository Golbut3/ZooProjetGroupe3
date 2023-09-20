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

import ZooSpring.formation.model.Interet;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.IInteret;
import jakarta.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/interet")
public class InteretApiController {

	private IInteret daoInteret;

	public InteretApiController(IInteret daoInteret) {
		super();
		this.daoInteret = daoInteret;
	}

	@GetMapping("")
	@JsonView(Views.Interet.class)
	public List<Interet> findAll() {
		return daoInteret.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.Interet.class)
	public Interet findById(@PathVariable int id) {
		return daoInteret.findById(id).get();
	}

	@PostMapping("")
	@JsonView(Views.Interet.class)
	public Interet create(@Valid @RequestBody Interet interet, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Interet invalide");
		}

		interet = daoInteret.save(interet);

		return interet;
	}

	@PutMapping("/{id}")
	@JsonView(Views.Interet.class)
	public Interet update(@RequestBody Interet interet, @PathVariable int id) {
		interet = daoInteret.save(interet);

		return interet;
	}

	@PatchMapping("/{id}")
	@JsonView(Views.Interet.class)
	public Interet partialEdit(@RequestBody Map<String, Object> fields, @PathVariable int id) {
		Interet interet = this.daoInteret.findById(id).get();
		
		fields.forEach((key, value) -> {
			Field field = ReflectionUtils.findField(Interet.class, key);
			ReflectionUtils.makeAccessible(field);
			ReflectionUtils.setField(field, interet, value);
		});
		
		Interet interetReturn = daoInteret.save(interet);
		
		return interetReturn;
	}

	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoInteret.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoInteret.deleteById(id);
	}
}
