package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.Entity;
@Entity
public class Aquarium extends Enclos{

	public Aquarium() {	}
	
	public Aquarium(int capacite) {
		super(capacite);
		
	}
	public Aquarium(Integer id, int capacite) {
		super(id, capacite);
		
	}

}
