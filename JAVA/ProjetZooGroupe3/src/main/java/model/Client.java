package model;


public class Client extends Compte {
	
	private String email;
	private String tel;
	
	public Client(Integer id, String login, String password, String prenom, String nom, String email,String tel) {
		super(id, login, password, prenom, nom);
		this.email=email;
		this.tel=tel;
		}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	@Override
	public String toString() {
		return "Client [id=" + id + ", login=" + login + ", password=" + password + ", prenom=" + prenom + ", nom="
				+ nom + ", email=" + email + ", tel=" + tel + "]";
	}



}
