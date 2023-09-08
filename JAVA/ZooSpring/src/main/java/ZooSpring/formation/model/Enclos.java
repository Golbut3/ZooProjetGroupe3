package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
@Entity
@Table(name = "enclos")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type_enclos")
public abstract class Enclos {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	
	@Version
	protected int version;
	
	protected int capacite;
	@OneToMany(mappedBy="enclos")
	protected List<Animal> animaux;
	
	@OneToMany(mappedBy="enclos")
	protected List<Chalet> chalets;

	@ManyToMany(mappedBy="enclos")
	protected List<Interet> interets;

	
	public Enclos() {}
	public Enclos(int capacite) {
		this.capacite = capacite;
	}
	public Enclos(Integer id, int capacite) {
		this.id = id;
		this.capacite = capacite;
	}

	

	public Integer getId() {
		return id;
	}

	public int getCapacite() {
		return capacite;
	}

	

	public void setId(Integer id) {
		this.id = id;
	}

	public void setCapacite(int capacite) {
		this.capacite = capacite;
	}


	public List<Animal> getAnimaux() {
		return animaux;
	}
	public void setAnimaux(List<Animal> animaux) {
		this.animaux = animaux;
	}
	public List<Chalet> getChalets() {
		return chalets;
	}
	public void setChalets(List<Chalet> chalets) {
		this.chalets = chalets;
	}
	@Override
	public String toString() {
		return "Enclos [id=" + id + ", capacite=" + capacite + "]";
	}
	
	


	
	
}
