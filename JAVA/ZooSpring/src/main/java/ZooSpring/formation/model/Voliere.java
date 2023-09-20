package ZooSpring.formation.model;

<<<<<<< Updated upstream
import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

=======
>>>>>>> Stashed changes
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Voliere")
@JsonView(Views.Common.class)

public class Voliere extends Enclos{
	@Column(name = "nombre_de_portoirs",length=100)
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
