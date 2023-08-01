package model;

public abstract class Enclos {
	
	protected int capacite;
	protected Integer id;

	public Enclos(Integer id,int capacite) {
		this.id=id;
		this.capacite = capacite;
		// TODO Auto-generated constructor stub
	}

	public int getCapacite() {
		return capacite;
	}

	public void setCapacite(int capacite) {
		this.capacite = capacite;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Enclos [capacite=" + capacite + ", id=" + id + "]";
	}

	
	
}
