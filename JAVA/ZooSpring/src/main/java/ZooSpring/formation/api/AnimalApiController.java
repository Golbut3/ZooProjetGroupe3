package ZooSpring.formation.api;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.util.ReflectionUtils;
import org.springframework.validation.BindingResult;
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

import ZooSpring.formation.model.Animal;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.IAnimal;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/animal")
public class AnimalApiController {

	private IAnimal daoAnimal;

	public AnimalApiController(IAnimal daoAnimal) {
		super();
		this.daoAnimal = daoAnimal;
	}

	@GetMapping("")
	@JsonView(Views.Animal.class)
	public List<Animal> findAll() {
		return daoAnimal.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.Animal.class)
	public Animal findById(@PathVariable int id) {
		return daoAnimal.findById(id).get();
	}

	@PostMapping("")
	@JsonView(Views.Animal.class)
	public Animal create(@Valid @RequestBody Animal animal, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Animal invalide");
		}

		animal = daoAnimal.save(animal);

		return animal;
	}

	@PutMapping("/{id}")
	@JsonView(Views.Animal.class)
	public Animal update(@RequestBody Animal animal, @PathVariable int id) {
		animal = daoAnimal.save(animal);

		return animal;
	}

	@PatchMapping("/{id}")
	@JsonView(Views.Animal.class)
	public Animal partialEdit(@RequestBody Map<String, Object> fields, @PathVariable int id) {
		Animal animal = this.daoAnimal.findById(id).get();
		
		fields.forEach((key, value) -> {
			Field field = ReflectionUtils.findField(Animal.class, key);
			ReflectionUtils.makeAccessible(field);
			ReflectionUtils.setField(field, animal, value);
		});
		
		Animal animalReturn = daoAnimal.save(animal);
		
		return animalReturn;
	}

	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoAnimal.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoAnimal.deleteById(id);
	}
}
