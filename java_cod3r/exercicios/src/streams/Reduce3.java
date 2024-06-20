package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.BiFunction;
import java.util.function.BinaryOperator;
import java.util.function.Function;
import java.util.function.Predicate;

public class Reduce3 {

	public static void main(String[] args) {
		
		Aluno aluno1 = new Aluno("Ana", 7.1);
		Aluno aluno2 = new Aluno("Luna", 6.1);
		Aluno aluno3 = new Aluno("Gui", 8.1);
		Aluno aluno4 = new Aluno("Gabi", 10);

		List<Aluno> alunos = Arrays.asList(aluno1, aluno2, aluno3, aluno4);

		Predicate<Aluno> aprovado = aluno -> aluno.nota >= 7;
		Function<Aluno, Double> notas = aluno -> aluno.nota;
		
		BiFunction<Media, Double, Media> calcularMedia = (media, nota) -> media.adicionar(nota);
		
		BinaryOperator<Media> combinar = (m1, m2) -> Media.combinar(m1, m2);
		
		Media media = alunos.stream()
			.filter(aprovado)
			.map(notas)
			.reduce(new Media(), calcularMedia, combinar);
		
		System.out.println("A média do aluno é " + media.getValor());
	}
}
