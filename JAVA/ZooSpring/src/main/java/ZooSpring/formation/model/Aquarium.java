package ZooSpring.formation.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Aquarium")

public class Aquarium extends Enclos{

	public Aquarium() {	}
	
	public Aquarium(int capacite) {
		super(capacite);
		
	}
	public Aquarium(Integer id, int capacite) {
		super(id, capacite);
		
	}

}
