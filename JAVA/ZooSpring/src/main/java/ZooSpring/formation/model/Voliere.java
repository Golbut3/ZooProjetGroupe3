package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Voliere")
public class Voliere extends Enclos{
	@Column
	private int nbPortoir;

	
	
	public Voliere() {

	}

	public Voliere(int capacite,int nbPortoir) {
		super(capacite);
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
		return "Voliere [nbPortoir=" + nbPortoir + "]";
	}

	



}
