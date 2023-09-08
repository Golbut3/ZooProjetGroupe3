package ZooSpring.formation.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Transient;

@Entity
public class Employe extends Compte {
	
	private double sal;
	@Transient
	private Poste poste;

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
