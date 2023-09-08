package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Foret")
public class Foret extends Enclos{

	public Foret(Integer id, int capacite, List<Animal> animals) {
		super(id, capacite, animals);
		
	}

}
