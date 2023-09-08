package ZooSpring.formation.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Transient;

@Entity
@DiscriminatorValue("Employe")
public class Employe extends Compte {
	
	private double sal;
	@Transient
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

	@Override
	public String toString() {
		return "Employe [id=" + id + ", login=" + login + ", password=" + password + ", prenom=" + prenom + ", nom="
				+ nom + ", sal=" + sal + ", poste=" + poste + "]";
	}


	
}
