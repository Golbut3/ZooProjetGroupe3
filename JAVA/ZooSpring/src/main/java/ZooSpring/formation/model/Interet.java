package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.Version;
@Entity
@Table(name="interet")
public class Interet {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Version
	int version;
	@Transient
	//@OneToMany(mappedBy="interet")
	private List<Enclos> enclos;

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
