package ZooSpring.formation.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("MobilHome")
public class MobilHome extends Logement{

	public MobilHome(Integer id, int nbPlace, double prix, String numero, String description) {
		super(id, nbPlace, prix, numero, description);
		
	}

}
