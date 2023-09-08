package ZooSpring.formation.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
@Entity
@DiscriminatorValue("Admin")
public class Admin extends Compte {

	
	public Admin() {}

	public Admin(Integer id, String login, String password, String prenom, String nom) {
		super(id, login, password, prenom, nom);
	}
	public Admin( String login, String password, String prenom, String nom) {
		super(login, password, prenom, nom);
	}
}

