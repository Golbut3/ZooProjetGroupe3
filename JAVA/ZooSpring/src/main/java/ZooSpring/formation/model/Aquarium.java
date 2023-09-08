package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.Entity;
@Entity
public class Aquarium extends Enclos{

	public Aquarium(Integer id, int capacite, List<Animal> animals) {
		super(id, capacite, animals);
		
	}

}
