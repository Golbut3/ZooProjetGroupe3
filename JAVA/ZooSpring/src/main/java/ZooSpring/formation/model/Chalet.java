package ZooSpring.formation.model;

public class Chalet extends Logement{

	private Enclos enclos;

	public Chalet(Integer id, int nbPlace, double prix, String numero, String description, Enclos enclos) {
		super(id, nbPlace, prix, numero, description);
		this.enclos=enclos;
		
	}

	public Enclos getEnclos() {
		return enclos;
	}

	public void setEnclos(Enclos enclos) {
		this.enclos = enclos;
	}

	@Override
	public String toString() {
		return "Chalet [id=" + id + ", nbPlace=" + nbPlace + ", prix=" + prix + ", numero=" + numero + ", description="
				+ description + ", enclos=" + enclos + "]";
	}






}
