package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Savane")
public class Savane extends Enclos{

	public Savane(Integer id, int capacite, List<Animal> animals) {
		super(id, capacite, animals);
		
	}

}
