package ZooSpring.formation.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
@Entity
@Table(name="interet")
@JsonView(Views.Common.class)
public class Interet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Version
	private int version;

	@ManyToMany()
	@JoinTable(name="interet_enclos",joinColumns=@JoinColumn(name="interet"),inverseJoinColumns=@JoinColumn(name="enclos"))
	@JsonView(Views.Interet.class)
	private List<Enclos> enclos;
	
	@OneToOne(mappedBy="interet")
	@JsonView(Views.Interet.class)
	private Reservation reservation;
	
	public Interet() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Enclos> getEnclos() {
		return enclos;
	}

	public void setEnclos(List<Enclos> enclos) {
		this.enclos = enclos;
	}

	public Reservation getReservation() {
		return reservation;
	}

	public void setReservation(Reservation reservation) {
		this.reservation = reservation;
	}
	
	

	@Override
	public String toString() {
		return "Interet [enclos=" + enclos + "]";
	}
	

}
