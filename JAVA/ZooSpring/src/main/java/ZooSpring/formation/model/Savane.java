package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Savane")
public class Savane extends Enclos{

	
	
	public Savane() {

	}

	public Savane(int capacite) {
		super(capacite);
		
	}

}
