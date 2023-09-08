package ZooSpring.formation.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.Version;

@Entity
@Table(name = "animal")
public class Animal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Version
	private int version;
	
	
	private String nom;
	private double poids;
	
	@Transient
	private Espece espece;
	
	
	
	public Animal(Integer id, Espece espece, String nom, double poids) {
		this.id = id;
		this.espece = espece;
		this.nom = nom;
		this.poids = poids;
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

	@Override
	public String toString() {
		return "Animal [nom=" + nom + ", poids=" + poids + ", espece=" + espece + ", id=" + id + "]";
	}

}
