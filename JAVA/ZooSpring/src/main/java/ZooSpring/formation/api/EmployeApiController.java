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

import ZooSpring.formation.model.Employe;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.IEmploye;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/employe")
public class EmployeApiController {

	private IEmploye daoEmploye;

	public EmployeApiController(IEmploye daoEmploye) {
		super();
		this.daoEmploye = daoEmploye;
	}

	@GetMapping("")
	@JsonView(Views.Employe.class)
	public List<Employe> findAll() {
		return daoEmploye.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.Employe.class)
	public Employe findById(@PathVariable int id) {
		return daoEmploye.findById(id).get();
	}

	@PostMapping("")
	@JsonView(Views.Employe.class)
	public Employe create(@Valid @RequestBody Employe employe, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Employe invalide");
		}

		employe = daoEmploye.save(employe);

		return employe;
	}

	@PutMapping("/{id}")
	@JsonView(Views.Employe.class)
	public Employe update(@RequestBody Employe employe, @PathVariable int id) {
		employe = daoEmploye.save(employe);

		return employe;
	}

	@PatchMapping("/{id}")
	@JsonView(Views.Employe.class)
	public Employe partialEdit(@RequestBody Map<String, Object> fields, @PathVariable int id) {
		Employe employe = this.daoEmploye.findById(id).get();
		
		fields.forEach((key, value) -> {
			Field field = ReflectionUtils.findField(Employe.class, key);
			ReflectionUtils.makeAccessible(field);
			ReflectionUtils.setField(field, employe, value);
		});
		
		Employe employeReturn = daoEmploye.save(employe);
		
		return employeReturn;
	}

	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoEmploye.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoEmploye.deleteById(id);
	}
}
