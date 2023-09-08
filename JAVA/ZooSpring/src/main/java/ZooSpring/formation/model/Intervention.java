package ZooSpring.formation.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
@Entity
@Table(name="intervention")

public class Intervention {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private LocalDate date;
	@Transient
	//@OneToOne
	//@JoinColumn(name="enclos")
	private Enclos enclos;
	@Transient
	//@OneToOne
	//@JoinColumn(name="employe")
	private Employe employe;
	@Transient
	//@OneToMany(mappedBy="intervention")
	List <Materiel> materiels;
	
	
	public Intervention() {
	}
	public Intervention(LocalDate date, Enclos enclos, Employe employe) {

		this.date = date;
		this.enclos = enclos;
		this.employe = employe;

	}
	public Integer getId() {
		return id;
	}
	public LocalDate getDate() {
		return date;
	}
	public Enclos getEnclos() {
		return enclos;
	}
	public Employe getEmploye() {
		return employe;
	}
	public List<Materiel> getMateriels() {
		return materiels;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public void setEnclos(Enclos enclos) {
		this.enclos = enclos;
	}
	public void setEmploye(Employe employe) {
		this.employe = employe;
	}
	public void setMateriels(List<Materiel> materiels) {
		this.materiels = materiels;
	}
	@Override
	public String toString() {
		return "Intervention [id=" + id + ", date=" + date + ", enclos=" + enclos + ", employe=" + employe
				+ ", materiels=" + materiels + "]";
	}
	
	
	

}
