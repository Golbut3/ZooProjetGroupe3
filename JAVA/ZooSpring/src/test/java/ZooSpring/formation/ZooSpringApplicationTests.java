package ZooSpring.formation;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ZooSpring.formation.model.Animal;
import ZooSpring.formation.model.Aquarium;
import ZooSpring.formation.model.Bassin;
import ZooSpring.formation.model.Chalet;
import ZooSpring.formation.model.Espece;
import ZooSpring.formation.model.Foret;
import ZooSpring.formation.model.Jungle;
import ZooSpring.formation.model.MobilHome;
import ZooSpring.formation.model.Savane;
import ZooSpring.formation.model.Voliere;
import ZooSpring.formation.repo.IAnimal;
import ZooSpring.formation.repo.IEnclos;
import ZooSpring.formation.repo.IEspece;
import ZooSpring.formation.repo.ILogement;

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
		Espece esp7 = new Espece ("gorrile");
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
		

		
//		esp1.setNom("cheval");
//		esp1 = especeRepo.save(esp1);
		
	}

}
