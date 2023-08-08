package model;

public abstract class Logement {
	protected Integer id;
	protected int nbPlace;
	protected double prix;
	protected String numero;
	protected String description;
	public Logement(Integer id, int nbPlace, double prix, String numero, String description) {
		this.id = id;
		this.nbPlace = nbPlace;
		this.prix = prix;
		this.numero = numero;
		this.description = description;
	}
	public Integer getId() {
		return id;
	}
	public int getNbPlace() {
		return nbPlace;
	}
	public double getPrix() {
		return prix;
	}
	public String getNumero() {
		return numero;
	}
	public String getDescription() {
		return description;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setNbPlace(int nbPlace) {
		this.nbPlace = nbPlace;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Logement [id=" + id + ", nbPlace=" + nbPlace + ", prix=" + prix + ", numero=" + numero
				+ ", description=" + description + "]";
	}
	
	
}
