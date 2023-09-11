package ZooSpring.formation.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
@Entity
@Table(name="reservation")

public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Version
	int version;
	@Column(name = "date_de_debut")
	private LocalDate dateDebut;
	@Column(name = "date_de_fin")
	private LocalDate dateFin;
	@Column(name = "nombre_de_visiteurs")
	private int nbVisiteurs;
	@Column
	private double prix;
	@ManyToOne
	@JoinColumn(name="client")
	private Client client;
	@ManyToOne
	@JoinColumn(name="logement")
	private Logement logement;
	@OneToOne
	@JoinColumn(name="interet")
	private Interet interet;
	
	
	public Reservation() {
	}

	public Reservation(LocalDate dateDebut, LocalDate dateFin, int nbVisiteurs, double prix, Client client,	Logement logement, Interet interet) {
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.nbVisiteurs = nbVisiteurs;
		this.prix = prix;
		this.client = client;
		this.logement = logement;
		this.interet=interet;
	}
	
	public Integer getId() {
		return id;
	}

	public LocalDate getDateDebut() {
		return dateDebut;
	}

	public LocalDate getDateFin() {
		return dateFin;
	}

	public int getNbVisiteurs() {
		return nbVisiteurs;
	}

	public double getPrix() {
		return prix;
	}

	public Client getClient() {
		return client;
	}

	public Logement getLogement() {
		return logement;
	}

	public Interet getInteret() {
		return interet;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setDateDebut(LocalDate dateDebut) {
		this.dateDebut = dateDebut;
	}

	public void setDateFin(LocalDate dateFin) {
		this.dateFin = dateFin;
	}

	public void setNbVisiteurs(int nbVisiteurs) {
		this.nbVisiteurs = nbVisiteurs;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public void setLogement(Logement logement) {
		this.logement = logement;
	}

	public void setInteret(Interet interet) {
		this.interet = interet;
	}

	@Override
	public String toString() {
		return "Reservation [id=" + id + ", dateDebut=" + dateDebut + ", dateFin=" + dateFin + ", nbVisiteurs="
				+ nbVisiteurs + ", prix=" + prix + ", client=" + client + ", logement=" + logement + ", interet="
				+ interet + "]";
	}


	
	

}
