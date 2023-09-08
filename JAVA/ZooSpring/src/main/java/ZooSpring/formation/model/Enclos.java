package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
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
	@Transient
	protected List<Animal> Animals;

	public Enclos(Integer id, int capacite, List<Animal> animals) {
		this.id = id;
		this.capacite = capacite;
		Animals = animals;
	}

	public Integer getId() {
		return id;
	}

	public int getCapacite() {
		return capacite;
	}

	public List<Animal> getAnimals() {
		return Animals;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setCapacite(int capacite) {
		this.capacite = capacite;
	}

	public void setAnimals(List<Animal> animals) {
		Animals = animals;
	}

	@Override
	public String toString() {
		return "Enclos [id=" + id + ", capacite=" + capacite + ", Animals=" + Animals + "]";
	}


	
	
}
