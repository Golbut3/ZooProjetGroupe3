package ZooSpring.formation.model;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name = "animal")
@JsonView(Views.Common.class)
public class Animal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Version
	private int version;
	
	@Column
	private String nom;
	@Column
	private double poids;
	
	@ManyToOne
	@JoinColumn(name="espece")
	@JsonView(Views.Animal.class)
	private Espece espece;
	
	@ManyToOne
	@JoinColumn(name="enclos")
	@JsonView(Views.Animal.class)
	private Enclos enclos;
	
	public Animal(){}
	
	public Animal(Espece espece, String nom, double poids) {
		this.espece = espece;
		this.nom = nom;
		this.poids = poids;
	}
	public Animal(Integer id, Espece espece, String nom, double poids) {
		this.id = id;
		this.espece = espece;
		this.nom = nom;
		this.poids = poids;
	}

	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getPoids() {
		return poids;
	}

	public void setPoids(double poids) {
		this.poids = poids;
	}

	public Espece getEspece() {
		return espece;
	}

	public void setEspece(Espece espece) {
		this.espece = espece;
	}

	public Enclos getEnclos() {
		return enclos;
	}

	public void setEnclos(Enclos enclos) {
		this.enclos = enclos;
	}

	@Override
	public String toString() {
		return "Animal [nom=" + nom + ", poids=" + poids + ", espece=" + espece + ", id=" + id + "]";
	}

}
