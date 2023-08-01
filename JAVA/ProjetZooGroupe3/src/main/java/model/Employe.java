package model;

public class Employe extends Compte {
	
	private double sal;

	public Employe(Integer id, String login, String password, String prenom, String nom, double sal) {
		super(id, login, password, prenom, nom);
		this.sal = sal;	
	}
	
}
