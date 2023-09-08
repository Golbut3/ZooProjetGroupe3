package ZooSpring.formation.model;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import jakarta.persistence.Version;

@Entity
@Table(name="logement")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type_logement",columnDefinition = "ENUM('Chalet','MobilHome')")
public abstract class Logement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	@Version
	int version;
	@Column
	protected int nbPlace;
	@Column
	protected double prix;
	@Column
	protected String numero;
	@Column
	protected String description;
	public Logement(Integer id, int nbPlace, double prix, String numero, String description) {
		this.id = id;
		this.nbPlace = nbPlace;
		this.prix = prix;
		this.numero = numero;
		this.description = description;
	}
	public Integer getId() {
		return id;
	}
	public int getNbPlace() {
		return nbPlace;
	}
	public double getPrix() {
		return prix;
	}
	public String getNumero() {
		return numero;
	}
	public String getDescription() {
		return description;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setNbPlace(int nbPlace) {
		this.nbPlace = nbPlace;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Logement [id=" + id + ", nbPlace=" + nbPlace + ", prix=" + prix + ", numero=" + numero
				+ ", description=" + description + "]";
	}
	
	
}
