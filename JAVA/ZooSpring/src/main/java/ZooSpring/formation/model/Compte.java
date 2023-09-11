package ZooSpring.formation.model;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name = "compte")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type_compte")
@JsonView(Views.Common.class)
public abstract class Compte  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	@Column(name="identifiant",nullable=false)
	protected String login;
	@Column(name="mot_de_passe", nullable=false)
	protected String password;
	@Column(nullable=false)
	protected String prenom;
	@Column(nullable=false)
	protected String nom;

	@Version
	protected int version;
		
	public Compte() {};

	public Compte(String login, String password, String prenom, String nom) {

		this.login = login;
		this.password = password;
		this.prenom = prenom;
		this.nom = nom;
	}
	public Compte(Integer id, String login, String password, String prenom, String nom) {

		this.id = id;
		this.login = login;
		this.password = password;
		this.prenom = prenom;
		this.nom = nom;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	@Override
	public String toString() {
		return "Compte [id=" + id + ", login=" + login + ", password=" + password + ", prenom=" + prenom + ", nom="
				+ nom + "]";
	}

}
