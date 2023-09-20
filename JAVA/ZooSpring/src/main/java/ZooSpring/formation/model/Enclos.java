package ZooSpring.formation.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonView;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
@Entity
@Table(name = "enclos")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type_enclos")
@JsonView(Views.Common.class)
@JsonTypeInfo( use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({ 
  @Type(value = Aquarium.class, name = "aquarium"), 
  @Type(value = Bassin.class, name = "bassin"), 
  @Type(value = Savane.class, name = "savane"),
  @Type(value = Voliere.class, name = "voliere"),
  @Type(value = Foret.class, name = "foret"),
  @Type(value = Jungle.class, name = "jungle")
})
public abstract class Enclos {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	
	@Version
	protected int version;
	@Column(length=3)
	protected int capacite;
	@OneToMany(mappedBy="enclos")
	@JsonView(Views.Enclos.class)
	protected List<Animal> animaux;
	
	@OneToMany(mappedBy="enclos")
	@JsonView(Views.Enclos.class)
	protected List<Chalet> chalets;

	@ManyToMany(mappedBy="enclos")
	@JsonView(Views.Enclos.class)
	protected List<Interet> interets;

	
	public Enclos() {}
	public Enclos(int capacite) {
		this.capacite = capacite;
	}
	public Enclos(Integer id, int capacite) {
		this.id = id;
		this.capacite = capacite;
	}

	

	public Integer getId() {
		return id;
	}

	public int getCapacite() {
		return capacite;
	}

	

	public void setId(Integer id) {
		this.id = id;
	}

	public void setCapacite(int capacite) {
		this.capacite = capacite;
	}


	public List<Animal> getAnimaux() {
		return animaux;
	}
	public void setAnimaux(List<Animal> animaux) {
		this.animaux = animaux;
	}
	public List<Chalet> getChalets() {
		return chalets;
	}
	public void setChalets(List<Chalet> chalets) {
		this.chalets = chalets;
	}
	
	
	public List<Interet> getInterets() {
		return interets;
	}
	public void setInterets(List<Interet> interets) {
		this.interets = interets;
	}
	@Override
	public String toString() {
		return "Enclos [id=" + id + ", capacite=" + capacite + "]";
	}
	
	


	
	
}
