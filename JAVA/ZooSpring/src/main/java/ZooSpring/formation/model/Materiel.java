package ZooSpring.formation.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name="materiel")
public class Materiel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	@Version
	int version;
	private String nom;
	
	
	public Materiel() {
	}
	public Materiel(String nom) {
		this.nom = nom;
	}
	public Integer getId() {
		return id;
	}
	public String getNom() {
		return nom;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	@Override
	public String toString() {
		return "Materiel [id=" + id + ", nom=" + nom + "]";
	}
	

}
