package model.manytomany;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	private Double grade;

	@ManyToMany(cascade = CascadeType.PERSIST)
	private List<Actor> actors = new ArrayList<>();

	public Movie() {
	}

	public Movie(String name, Double grade) {
		this.name = name;
		this.grade = grade;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getGrade() {
		return grade;
	}

	public void setGrade(Double grade) {
		this.grade = grade;
	}

	public List<Actor> getActors() {
		return actors;
	}

	public void setActors(List<Actor> actors) {
		this.actors = actors;
	}

	public void addBidirectionalActor(Actor actor) {
		if (actor == null) return;

		boolean notContainsThisActor = !this.getActors().contains(actor);
		if (notContainsThisActor) {
			this.getActors().add(actor);
		}

		boolean notContainsThisMovie = !actor.getMovies().contains(this);
		if (notContainsThisMovie) {
			actor.getMovies().add(this); 
		}
	}
}
