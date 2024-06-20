package test.queries;

import infra.DAO;
import model.query.MovieGrade;

public class GetAvarageOfMovies {
	
	public static void main(String[] args) {
		
		DAO<MovieGrade> dao = new DAO<>(MovieGrade.class);
		MovieGrade nota = dao.querieOne("getMovieGeneralAvarage");

		System.out.println(nota.getAvarage());

		dao.closeEM();
	}
}
