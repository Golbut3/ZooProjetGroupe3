package ZooSpring.formation.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="intervention")

public class Intervention {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private LocalDate date;
	@OneToOne
	@JoinColumn(name="enclos")
	private Enclos enclos;
	@OneToOne
	@JoinColumn(name="employe")
	private Employe employe;
	@OneToMany(mappedBy="intervention")
	List <Materiel> materiels;
	public Intervention(Integer id, LocalDate date, Enclos enclos, Employe employe, List<Materiel> materiels) {
		this.id = id;
		this.date = date;
		this.enclos = enclos;
		this.employe = employe;
		this.materiels = materiels;
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
