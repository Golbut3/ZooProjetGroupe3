package model;

public class Animal {
	private String nom;
	private double poids;
	private Espece espece;
	private Integer id;
	
	
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
