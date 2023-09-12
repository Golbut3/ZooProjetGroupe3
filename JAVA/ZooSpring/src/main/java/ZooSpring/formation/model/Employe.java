package ZooSpring.formation.model;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Transient;

@Entity
@DiscriminatorValue("Employe")
@JsonView(Views.Common.class)
public class Employe extends Compte {
	@Column(name="salaire")
	@JsonView(Views.Employe.class)
	private double sal;
	@Enumerated(EnumType.STRING)
	@Column(columnDefinition = "ENUM('Animalier', 'Soigneur', 'Paysagiste', 'Gardien')")
	@JsonView(Views.Employe.class)
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
