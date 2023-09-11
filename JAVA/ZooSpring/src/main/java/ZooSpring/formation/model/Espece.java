package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name = "espece")
public class Espece {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length=80)
	private String nom;
	
	@Version
	private int version;
	
	@OneToMany(mappedBy="espece")
	private List <Animal> animaux;
			
	public Espece() {}
	public Espece(String nom) {
		this.nom = nom;
	}
	public Espece(Integer id, String nom) {
		this.id = id;
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
	public List<Animal> getAnimaux() {
		return animaux;
	}
	public void setAnimaux(List<Animal> animaux) {
		this.animaux = animaux;
	}
	@Override
	public String toString() {
		return "Espece [id=" + id + ", nom=" + nom + "]";
	}

}
