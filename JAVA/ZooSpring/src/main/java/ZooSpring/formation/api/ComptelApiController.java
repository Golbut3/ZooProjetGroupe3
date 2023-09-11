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

import ZooSpring.formation.model.Compte;
import ZooSpring.formation.repo.ICompte;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/compte")
public class ComptelApiController {

	private ICompte daoCompte;

	public ComptelApiController(ICompte daoCompte) {
		super();
		this.daoCompte = daoCompte;
	}

	@GetMapping("")
	//@JsonView(Views.Compte.class)
	public List<Compte> findAll() {
		return daoCompte.findAll();
	}

	@GetMapping("/{id}")
	//@JsonView(Views.CompteWithFiliere.class)
	public Compte findById(@PathVariable int id) {
		return daoCompte.findById(id).get();
	}

	@PostMapping("")
	//@JsonView(Views.Compte.class)
	public Compte create(@Valid @RequestBody Compte compte, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Compte invalide");
		}

		compte = daoCompte.save(compte);

		return compte;
	}

	@PutMapping("/{id}")
	//@JsonView(Views.Compte.class)
	public Compte update(@RequestBody Compte compte, @PathVariable int id) {
		compte = daoCompte.save(compte);

		return compte;
	}

	@PatchMapping("/{id}")
	//@JsonView(Views.Compte.class)
	public Compte partialEdit(@RequestBody Map<String, Object> fields, @PathVariable int id) {
		Compte compte = this.daoCompte.findById(id).get();
		
		fields.forEach((key, value) -> {
			Field field = ReflectionUtils.findField(Compte.class, key);
			ReflectionUtils.makeAccessible(field);
			ReflectionUtils.setField(field, compte, value);
		});
		
		Compte compteReturn = daoCompte.save(compte);
		
		return compteReturn;
	}

	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoCompte.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoCompte.deleteById(id);
	}
}
