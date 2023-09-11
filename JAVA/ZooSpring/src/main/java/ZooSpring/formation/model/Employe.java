package ZooSpring.formation.model;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Transient;

@Entity
@DiscriminatorValue("Employe")
@JsonView(Views.Common.class)
public class Employe extends Compte {
	@Column(name="salaire", nullable=false)
	@JsonView(Views.Employe.class)
	private double sal;
	@JsonView(Views.Employe.class) //@Column(nullable=false)
	private Poste poste;

	public Employe() {}
	
	public Employe(String login, String password, String prenom, String nom, double sal, Poste poste) {
		super(login, password, prenom, nom);
		this.sal = sal;	
		this.poste=poste;
	}
	public Employe(Integer id, String login, String password, String prenom, String nom, double sal, Poste poste) {
		super(id, login, password, prenom, nom);
		this.sal = sal;	
		this.poste=poste;
	}

	
	public double getSal() {
		return sal;
	}

	public void setSal(double sal) {
		this.sal = sal;
	}

	public Poste getPoste() {
		return poste;
	}

	public void setPoste(Poste poste) {
		this.poste = poste;
	}

	@Override
	public String toString() {
		return "Employe [id=" + id + ", login=" + login + ", password=" + password + ", prenom=" + prenom + ", nom="
				+ nom + ", sal=" + sal + ", poste=" + poste + "]";
	}


	
}
