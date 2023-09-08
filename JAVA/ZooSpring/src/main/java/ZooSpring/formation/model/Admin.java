package ZooSpring.formation.model;

import jakarta.persistence.Entity;

public class Admin extends Compte {

	public Admin(Integer id, String login, String password, String prenom, String nom) {
		super(id, login, password, prenom, nom);
	}

}

