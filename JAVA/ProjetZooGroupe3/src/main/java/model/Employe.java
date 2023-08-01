package model;

public class Employe extends Compte {
	
	private double sal;

	public Employe(Integer id, String login, String password, String prenom, String nom, double sal) {
		super(id, login, password, prenom, nom);
		this.sal = sal;	
	}

	@Override
	public String toString() {
		return "Employe [sal=" + sal + ", id=" + id + ", login=" + login + ", password=" + password + ", prenom="
				+ prenom + ", nom=" + nom + "]";
	}
	
}
