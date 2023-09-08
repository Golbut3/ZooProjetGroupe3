package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Foret")
public class Foret extends Enclos{

	public Foret() {
	}
	public Foret(int capacite, ) {
		super(capacite);
		
	}
	public Foret(Integer id, int capacite) {
		super(id, capacite);
		
	}

}
