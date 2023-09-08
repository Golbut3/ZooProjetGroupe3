package ZooSpring.formation.model;

import jakarta.persistence.Entity;

//@Entity
public class Chalet extends Logement{
	
	//Cardinalite
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
