package ZooSpring.formation.model;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("MobilHome")
@JsonView(Views.Common.class)

public class MobilHome extends Logement{

	
	
	public MobilHome() {

	}

	public MobilHome(int nbPlace, double prix, String numero, String description) {
		super(nbPlace, prix, numero, description);
		
	}

}
