package model;

import java.time.LocalDate;

public class Reservation {
	private Integer id;
	private LocalDate dateDebut;
	private LocalDate dateFin;
	private int nbVisiteurs;
	private double prix;
	private Client client;
	private Logement logement;
	private Interet interet;
	public Reservation(Integer id, LocalDate dateDebut, LocalDate dateFin, int nbVisiteurs, double prix, Client client,	Logement logement, Interet interet) {
		this.id = id;
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
