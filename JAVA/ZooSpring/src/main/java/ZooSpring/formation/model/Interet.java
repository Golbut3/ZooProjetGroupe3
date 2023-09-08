package ZooSpring.formation.model;

import java.util.List;

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
public class Interet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Version
	private int version;

	@ManyToMany()
	@JoinTable(name="interet_enclos",joinColumns=@JoinColumn(name="interet"),inverseJoinColumns=@JoinColumn(name="enclos"))
	private List<Enclos> enclos;
	
	@OneToOne(mappedBy="interet")
	private Reservation reservation;
	
	public Interet() {
	}

	public List<Enclos> getEnclos() {
		return enclos;
	}

	public void setEnclos(List<Enclos> enclos) {
		this.enclos = enclos;
	}

	@Override
	public String toString() {
		return "Interet [enclos=" + enclos + "]";
	}
	

}
