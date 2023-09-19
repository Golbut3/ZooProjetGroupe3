package ZooSpring.formation;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ZooSpring.formation.model.Admin;
import ZooSpring.formation.model.Animal;
import ZooSpring.formation.model.Aquarium;
import ZooSpring.formation.model.Bassin;
import ZooSpring.formation.model.Chalet;
import ZooSpring.formation.model.Client;
import ZooSpring.formation.model.Employe;
import ZooSpring.formation.model.Enclos;
import ZooSpring.formation.model.Espece;
import ZooSpring.formation.model.Foret;
import ZooSpring.formation.model.Interet;
import ZooSpring.formation.model.Intervention;
import ZooSpring.formation.model.Jungle;
import ZooSpring.formation.model.Materiel;
import ZooSpring.formation.model.MobilHome;
import ZooSpring.formation.model.Poste;
import ZooSpring.formation.model.Reservation;
import ZooSpring.formation.model.Savane;
import ZooSpring.formation.model.Voliere;
import ZooSpring.formation.repo.IAdmin;
import ZooSpring.formation.repo.IAnimal;
import ZooSpring.formation.repo.IClient;
import ZooSpring.formation.repo.IEmploye;
import ZooSpring.formation.repo.IEnclos;
import ZooSpring.formation.repo.IEspece;
import ZooSpring.formation.repo.IInteret;
import ZooSpring.formation.repo.IIntervention;
import ZooSpring.formation.repo.ILogement;
import ZooSpring.formation.repo.IMateriel;
import ZooSpring.formation.repo.IReservation;

@SpringBootTest
class ZooSpringApplicationTests {

	@Autowired
	private IEspece especeRepo;
	@Autowired
	private ILogement logementRepo;
	@Autowired
	private IEnclos enclosRepo;
	@Autowired
	private IAnimal animalRepo;
	@Autowired
	private IClient clientRepo;
	@Autowired
	private IAdmin adminRepo;
	@Autowired
	private IEmploye employeRepo;
	@Autowired
	private IInteret interetRepo;
	@Autowired
	private IIntervention interventionRepo;
	@Autowired
	private IReservation reservationRepo;
	@Autowired
	private IMateriel materielRepo;
	
	
	@Test
	void contextLoads() {
		
		Espece esp1 = new Espece ("ornithorynque");
		especeRepo.save(esp1);
		Espece esp2 = new Espece ("lion");
		especeRepo.save(esp2);
		Espece esp3 = new Espece ("perroquet");
		especeRepo.save(esp3);
		Espece esp4 = new Espece ("pigeon");
		especeRepo.save(esp4);
		Espece esp5 = new Espece ("sundacolugo");
		especeRepo.save(esp5);
		Espece esp6 = new Espece ("saumon");
		especeRepo.save(esp6);
		Espece esp7 = new Espece ("gorille");
		especeRepo.save(esp7);
		Espece esp8 = new Espece ("otarie");
		especeRepo.save(esp8);
		
		MobilHome mob1 = new MobilHome(2, 150.00, "MOB001","Le Cabanon des amoureux. 2 PERSONNES. Tiny House");
		logementRepo.save(mob1);
		MobilHome mob2 = new MobilHome(4, 250.00, "MOB002","La Chaumière du Bayou. 4 PERSONNES. Tiny House");
		logementRepo.save(mob2);
		MobilHome mob3 = new MobilHome(6, 350.00, "MOB003","Le Tanière des ours. 6 PERSONNES. Tiny House");
		logementRepo.save(mob3);
		
		Aquarium aqu1 = new Aquarium(100);
		enclosRepo.save(aqu1);
		Bassin bas1 = new Bassin(90);
		enclosRepo.save(bas1);
		Foret for1 = new Foret(105);
		enclosRepo.save(for1);
		Jungle jun1 = new Jungle(50);
		enclosRepo.save(jun1);
		Savane sav1 = new Savane(60);
		enclosRepo.save(sav1);
		Voliere vol1 = new Voliere(100,20);
		enclosRepo.save(vol1);
		
		Chalet cha1 = new Chalet(10, 350.00, "CHA001","Le Châlet sur le lac 10 PERSONNES.Châlet", bas1);
		logementRepo.save(cha1);
		Chalet cha2 = new Chalet(8, 350.00, "CHA002","La Cabane de pêcheur.8 PERSONNES. Châlet", for1);
		logementRepo.save(cha2);
		
		Animal ani1 = new Animal(esp1,"BecDeCanard", 2);
		ani1.setEnclos(bas1);
		animalRepo.save(ani1);
		
		Animal ani2 = new Animal(esp2,"simba", 160);
		ani2.setEnclos(sav1);
		animalRepo.save(ani2);
		Animal ani3 = new Animal(esp3,"coco", 3);
		ani3.setEnclos(vol1);
		animalRepo.save(ani3);
		Animal ani4 = new Animal(esp4,"vaillant", 0.5);
		ani4.setEnclos(vol1);
		animalRepo.save(ani4);
		Animal ani5 = new Animal(esp5,"sundacolugo", 1.5);
		ani5.setEnclos(for1);
		animalRepo.save(ani5);
		Animal ani6 = new Animal(esp5,"salmo", 4.5);
		ani6.setEnclos(aqu1);
		animalRepo.save(ani6);
		Animal ani7 = new Animal(esp5,"tok", 250);
		ani7.setEnclos(jun1);
		animalRepo.save(ani7);
		Animal ani8 = new Animal(esp5,"watson", 80);
		ani8.setEnclos(bas1);
		animalRepo.save(ani8);
		
		Client cli1 = new Client("Tahir","tahirmed2023","Tahir","Medjadba","tahirmed@gmail.com","0635353535");
		// NE PAS OUBLIER DE ADD LA LISTE DE RESERVATION
		clientRepo.save(cli1);
		
		Client cli2 = new Client("Lucas","lucascharlet"
				+ "2023","Lucas","Charlet","lucascharlet@gmail.com","0636363636");
		// NE PAS OUBLIER DE ADD LA LISTE DE RESERVATION
		clientRepo.save(cli2);
		
		Client cli3 = new Client("Cynthia","cynthiaehr2023","Cynthia","Ehrhard","cynthiaehrhard@gmail.com","0637373737");
		// NE PAS OUBLIER DE ADD LA LISTE DE RESERVATION
		clientRepo.save(cli3);
		
		Admin adm1 = new Admin("David","daviddome2023","David","Domecyn");
		adminRepo.save(adm1);
		
		Admin adm2 = new Admin("Feriel","ferielbali2023","Feriel","Bali");
		adminRepo.save(adm2);
		
		Employe emp1 = new Employe("Jordan","jordanabid2023","Jordan","Abid",1500.0,Poste.Animalier);
		employeRepo.save(emp1);
		
		Employe emp2 = new Employe("Manon","manoneven1503","Manon","Even",1600.0,Poste.Paysagiste);
		employeRepo.save(emp2);
		
		Employe emp3 = new Employe("Diane","dianereja1234","Diane","Reja",1560.0,Poste.Gardien);
		employeRepo.save(emp3);
		
		Interet int1= new Interet();
		List <Enclos> listeenclos1= new ArrayList();
		listeenclos1.add(vol1);
		int1.setEnclos(listeenclos1);
		interetRepo.save(int1);
		//on crée la reservation avant de l'ajouter à l'interet
		Reservation reserv1 = new Reservation(LocalDate.parse("2023-10-15"),LocalDate.parse("2023-10-25"),4,2500.0,cli1,cha2,int1);
		reservationRepo.save(reserv1);
		
		int1.setReservation(reserv1);
		interetRepo.save(int1);
		
		
		Interet int2= new Interet();
		List <Enclos> listeenclos2= new ArrayList();
		listeenclos2.add(bas1);
		int2.setEnclos(listeenclos2);
		
		interetRepo.save(int2);
		//on crée la reservation avant de l'ajouter à l'interet
		Reservation reserv2 = new Reservation(LocalDate.parse("2023-09-10"),LocalDate.parse("2023-09-15"),8,1750.0,cli2,cha2,int2);
		reservationRepo.save(reserv2);
		
		int2.setReservation(reserv2);
		interetRepo.save(int2);
		
		Materiel mat1 = new Materiel("Seringue1");
		materielRepo.save(mat1);
		Materiel mat2 = new Materiel("Medicament1");
		materielRepo.save(mat2);
		Materiel mat3 = new Materiel("Desinfectant1");
		materielRepo.save(mat3);
		Materiel mat4 = new Materiel("Vaccin1");
		materielRepo.save(mat4);
	
		List <Materiel> listemat1= new ArrayList();
		Collections.addAll(listemat1,mat1,mat3,mat2);
		
		Intervention interv1 = new Intervention(LocalDate.parse("2023-09-20"),aqu1,emp1);
		interv1.setMateriels(listemat1);
		interventionRepo.save(interv1);
		
		mat1.setIntervention(interv1);
		mat3.setIntervention(interv1);
		mat2.setIntervention(interv1);
		
	}
	

}
