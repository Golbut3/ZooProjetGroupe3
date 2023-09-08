package ZooSpring.formation.model;

import jakarta.persistence.Entity;
@Entity
public class Bassin extends Enclos{

	
	public Bassin() {}

	public Bassin( int capacite) {
		super(capacite);
		
	}
	
	public Bassin(Integer id, int capacite) {
		super(id, capacite);
		
	}

}
