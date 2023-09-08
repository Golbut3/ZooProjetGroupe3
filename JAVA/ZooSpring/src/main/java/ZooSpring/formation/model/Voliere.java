package ZooSpring.formation.model;

import java.util.List;

public class Voliere extends Enclos{
	private int nbPortoir;

	public Voliere(Integer id, int capacite,List<Animal> animals, int nbPortoir) {
		super(id, capacite, animals);
		this.nbPortoir=nbPortoir;
		
	}

	public int getNbPortoir() {
		return nbPortoir;
	}

	public void setNbPortoir(int nbPortoir) {
		this.nbPortoir = nbPortoir;
	}

	@Override
	public String toString() {
		return "Voliere [id=" + id + ", capacite=" + capacite + ", Animals=" + Animals + ", nbPortoir=" + nbPortoir + "]";
	}



}
