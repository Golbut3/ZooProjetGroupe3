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
@Table(name="materiel")
@JsonView(Views.Common.class)

public class Materiel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Version
	private int version;
	private String nom;
	@ManyToOne
	@JoinColumn(name="intervention")
	@JsonView(Views.Materiel.class)

	private Intervention intervention;
	
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
	public Intervention getIntervention() {
		return intervention;
	}
	public void setIntervention(Intervention intervention) {
		this.intervention = intervention;
	}
	@Override
	public String toString() {
		return "Materiel [id=" + id + ", nom=" + nom + "]";
	}
	

}
