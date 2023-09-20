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

import ZooSpring.formation.model.Admin;
import ZooSpring.formation.model.Views;
import ZooSpring.formation.repo.IAdmin;
import jakarta.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin")
public class AdminApiController {

	private IAdmin daoAdmin;

	public AdminApiController(IAdmin daoAdmin) {
		super();
		this.daoAdmin = daoAdmin;
	}

	@GetMapping("")
	@JsonView(Views.Admin.class)
	public List<Admin> findAll() {
		return daoAdmin.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.Admin.class)
	public Admin findById(@PathVariable int id) {
		return daoAdmin.findById(id).get();
	}

	@PostMapping("")
	@JsonView(Views.Admin.class)
	public Admin create(@Valid @RequestBody Admin admin, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Admin invalide");
		}

		admin = daoAdmin.save(admin);

		return admin;
	}

	@PutMapping("/{id}")
	@JsonView(Views.Admin.class)
	public Admin update(@RequestBody Admin admin, @PathVariable int id) {
		admin = daoAdmin.save(admin);

		return admin;
	}

	@PatchMapping("/{id}")
	@JsonView(Views.Admin.class)
	public Admin partialEdit(@RequestBody Map<String, Object> fields, @PathVariable int id) {
		Admin admin = this.daoAdmin.findById(id).get();
		
		fields.forEach((key, value) -> {
			Field field = ReflectionUtils.findField(Admin.class, key);
			ReflectionUtils.makeAccessible(field);
			ReflectionUtils.setField(field, admin, value);
		});
		
		Admin adminReturn = daoAdmin.save(admin);
		
		return adminReturn;
	}

	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoAdmin.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoAdmin.deleteById(id);
	}
}
