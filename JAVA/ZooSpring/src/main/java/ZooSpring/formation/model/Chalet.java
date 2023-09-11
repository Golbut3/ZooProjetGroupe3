package ZooSpring.formation.model;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@DiscriminatorValue("Chalet")
@JsonView(Views.Common.class)

public class Chalet extends Logement{
	
	@ManyToOne
	@JoinColumn(name="enclos")
	@JsonView(Views.Logement.class)
	private Enclos enclos;

	public Chalet() {}
	
	public Chalet(int nbPlace, double prix, String numero, String description, Enclos enclos) {
		super(nbPlace, prix, numero, description);
		this.enclos=enclos;
		
	}
	

	public Enclos getEnclos() {
		return enclos;
	}

	public void setEnclos(Enclos enclos) {
		this.enclos = enclos;
	}

	@Override
	public String toString() {
		return "Chalet [id=" + id + ", nbPlace=" + nbPlace + ", prix=" + prix + ", numero=" + numero + ", description="
				+ description + ", enclos=" + enclos + "]";
	}






}
