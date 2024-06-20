package test.manytomany;

import infra.DAO;
import model.manytomany.Actor;
import model.manytomany.Movie;

public class NewMovieActor {
	
	public static void main(String[] args) {
		
		Movie movieA = new Movie("Start Wars", 8.7);
		Movie movieB = new Movie("O Fugitivo", 8.9);

		Actor actorA = new Actor("Harrison Ford");
		Actor actorB = new Actor("Carrie Fisher");

		movieA.addBidirectionalActor(actorA);
		movieA.addBidirectionalActor(actorB);

		movieB.addBidirectionalActor(actorA);

		DAO<Movie> dao = new DAO<>();
		dao.atomicInlude(movieA);
	}
}
