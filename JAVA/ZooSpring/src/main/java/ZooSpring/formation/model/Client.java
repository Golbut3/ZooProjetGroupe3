package ZooSpring.formation.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
@DiscriminatorValue("Client")
@JsonView(Views.Common.class)
public class Client extends Compte {
	@Column(nullable=false)
	private String email;
	@Column
	private String tel;
	
	@OneToMany(mappedBy="client")
	@JsonView(Views.Client.class)
	private List <Reservation> reservations;
	
	public Client() {}
	
	public Client( String login, String password, String prenom, String nom, String email,String tel) {
		super(login, password, prenom, nom);
		this.email=email;
		this.tel=tel;
		}
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

	public List<Reservation> getReservations() {
		return reservations;
	}

	public void setReservations(List<Reservation> reservations) {
		this.reservations = reservations;
	}

	@Override
	public String toString() {
		return "Client [id=" + id + ", login=" + login + ", password=" + password + ", prenom=" + prenom + ", nom="
				+ nom + ", email=" + email + ", tel=" + tel + "]";
	}



}
