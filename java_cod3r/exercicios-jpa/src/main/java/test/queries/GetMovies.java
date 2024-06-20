package test.queries;

import java.util.List;

import infra.DAO;
import model.manytomany.Movie;

public class GetMovies {

	public static void main(String[] args) {

		DAO<Movie> dao = new DAO<>(Movie.class);
		List<Movie> movies = dao.querie("moviesWithGradeBiggerThen", "grade", 8.5);

		for(Movie movie : movies) {
			System.out.println(movie.getName());
		}
	}
}
