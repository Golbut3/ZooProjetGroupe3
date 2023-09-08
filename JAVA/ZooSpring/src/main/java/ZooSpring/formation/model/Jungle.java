package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Jungle")
public class Jungle extends Enclos{

	public Jungle() {};
	
	public Jungle(int capacite) {
		super(capacite);
		
	}

}
