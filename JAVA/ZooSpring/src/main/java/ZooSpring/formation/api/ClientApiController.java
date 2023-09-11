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

import ZooSpring.formation.model.Client;
import ZooSpring.formation.repo.IClient;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/client")
public class ClientApiController {

	private IClient daoClient;

	public ClientApiController(IClient daoClient) {
		super();
		this.daoClient = daoClient;
	}

	@GetMapping("")
	//@JsonView(Views.Client.class)
	public List<Client> findAll() {
		return daoClient.findAll();
	}

	@GetMapping("/{id}")
	//@JsonView(Views.ClientWithFiliere.class)
	public Client findById(@PathVariable int id) {
		return daoClient.findById(id).get();
	}

	@PostMapping("")
	//@JsonView(Views.Client.class)
	public Client create(@Valid @RequestBody Client client, BindingResult result) {
		if (result.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Client invalide");
		}

		client = daoClient.save(client);

		return client;
	}

	@PutMapping("/{id}")
	//@JsonView(Views.Client.class)
	public Client update(@RequestBody Client client, @PathVariable int id) {
		client = daoClient.save(client);

		return client;
	}

	@PatchMapping("/{id}")
	//@JsonView(Views.Client.class)
	public Client partialEdit(@RequestBody Map<String, Object> fields, @PathVariable int id) {
		Client client = this.daoClient.findById(id).get();
		
		fields.forEach((key, value) -> {
			Field field = ReflectionUtils.findField(Client.class, key);
			ReflectionUtils.makeAccessible(field);
			ReflectionUtils.setField(field, client, value);
		});
		
		Client clientReturn = daoClient.save(client);
		
		return clientReturn;
	}

	@DeleteMapping("/{id}")
	public void remove(@PathVariable int id) {
		if(!daoClient.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
		
		daoClient.deleteById(id);
	}
}
