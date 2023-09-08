package ZooSpring.formation.model;

import java.util.List;

public class Interet {
	
	private List<Enclos> enclos;

	public Interet(List<Enclos> enclos) {
		this.enclos = enclos;
	}

	public List<Enclos> getEnclos() {
		return enclos;
	}

	public void setEnclos(List<Enclos> enclos) {
		this.enclos = enclos;
	}

	@Override
	public String toString() {
		return "Interet [enclos=" + enclos + "]";
	}
	

}
