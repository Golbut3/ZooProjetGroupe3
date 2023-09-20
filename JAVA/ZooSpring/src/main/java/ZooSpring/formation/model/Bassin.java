package ZooSpring.formation.model;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Bassin")
public class Bassin extends Enclos{

	
	public Bassin() {}

	public Bassin( int capacite) {
		super(capacite);
		
	}
	
	public Bassin(Integer id, int capacite) {
		super(id, capacite);
		
	}

}
