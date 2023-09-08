package ZooSpring.formation.model;

public class Materiel {
	
	private Integer id;
	private String nom;
	public Materiel(Integer id, String nom) {
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
	@Override
	public String toString() {
		return "Materiel [id=" + id + ", nom=" + nom + "]";
	}
	

}
