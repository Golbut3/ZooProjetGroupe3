package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Jungle")
public class Jungle extends Enclos{

	public Jungle(Integer id, int capacite, List<Animal> animals) {
		super(id, capacite, animals);
		
	}

}
