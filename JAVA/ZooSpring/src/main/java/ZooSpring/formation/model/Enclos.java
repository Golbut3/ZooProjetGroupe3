package ZooSpring.formation.model;

import java.util.List;

public abstract class Enclos {
	
	protected Integer id;
	protected int capacite;
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
