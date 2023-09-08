package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.Entity;
@Entity
public class Bassin extends Enclos{

	public Bassin(Integer id, int capacite, List<Animal> animals) {
		super(id, capacite, animals);
		
	}

}
