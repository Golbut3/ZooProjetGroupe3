package ZooSpring.formation.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
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
	protected int version;
	@Column(name = "nombre_de_places",length=70)
	protected int nbPlace;
	@Column(name = "date_de_debut", nullable=false)
	protected double prix;
	@Column(length=6)
	protected String numero;
	@Column(length=200)
	protected String description;
	
	@OneToMany(mappedBy="logement")
	protected List <Reservation> reservations;
	
	
	public Logement() {
	}
	public Logement(int nbPlace, double prix, String numero, String description) {
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
