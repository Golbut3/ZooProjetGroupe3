package ZooSpring.formation.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

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
@JsonView(Views.Common.class)
@JsonTypeInfo( use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({ 
  @Type(value = Chalet.class, name = "chalet"), 
  @Type(value = MobilHome.class, name = "mobilHome"), 

})
public abstract class Logement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	@Version
	protected int version;
	@Column(name = "nombre_de_places",length=2)
	protected int nbPlace;
	@Column(nullable=false)
	protected double prix;
	@Column(length=6)
	protected String numero;
	@Column(columnDefinition="text")
	protected String description;
	
	@OneToMany(mappedBy="logement")
	@JsonView(Views.Logement.class)

	protected List <Reservation> reservations;
	
	
	public Logement() {
	}
	
	public Logement(Integer id, int nbPlace, double prix, String numero, String description) {
		this.id = id;
		this.nbPlace = nbPlace;
		this.prix = prix;
		this.numero = numero;
		this.description = description;
	}

	public Logement(int nbPlace, double prix, String numero, String description) {
		this.nbPlace = nbPlace;
		this.prix = prix;
		this.numero = numero;
		this.description = description;
	}
	
	
	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
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
	
	public List<Reservation> getReservations() {
		return reservations;
	}
	public void setReservations(List<Reservation> reservations) {
		this.reservations = reservations;
	}
	@Override
	public String toString() {
		return "Logement [id=" + id + ", nbPlace=" + nbPlace + ", prix=" + prix + ", numero=" + numero
				+ ", description=" + description + "]";
	}
	
	
}
