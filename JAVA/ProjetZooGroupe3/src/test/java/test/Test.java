package test;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import model.Admin;
import model.Animal;
import model.Chalet;
import model.Client;
import model.Employe;
import model.Espece;
import model.Interet;
import model.Intervention;
import model.Materiel;
import model.Poste;
import model.Reservation;
import model.Voliere;

public class Test {

	public static void main(String[] args) {
		Admin a1 = new Admin(1, "admin", "admin", "ad", "min");
		Client c1 = new Client(1, "client", "client", "cli", "ent", "c1@gmail.com","0600000000");
		Espece lion = new Espece(1, "lion");
		Animal simba = new Animal(1,lion,"simba", 150);
		List<Animal> populationEnclosV1 = new ArrayList<>();
		populationEnclosV1.add(simba);
		Voliere v1 = new Voliere(1,50,populationEnclosV1,10);
		Chalet chalet1 = new Chalet(1, 6, 205.40, "8B", "Chalet en bordure de foret",v1);
		Interet i1 = new Interet();
		Reservation r1 = new Reservation(1, LocalDate.parse("2023-01-15"), LocalDate.parse("2023-01-25"), 4, 470.15, c1, chalet1,i1);
		
		
		Employe johnDoe = new Employe(1, "emp", "emp", "John", "Doe",2000, Poste.Soigneur);
		Materiel rateau = new Materiel(1,"rateau");
		Materiel brouette = new Materiel(2,"brouette");
		List<Materiel> matosInterv1 = new ArrayList<>();
		Collections.addAll(matosInterv1,rateau, brouette);
		Intervention interv1=new Intervention(1, LocalDate.parse("2023-02-01"), v1,johnDoe,matosInterv1); 
				
		System.out.println(r1);
		
		System.out.println(interv1);
		
	}

}
