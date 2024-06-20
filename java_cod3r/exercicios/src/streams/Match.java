package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

public class Match {

	public static void main(String[] args) {

		Aluno aluno1 = new Aluno("Ana", 1.1);
		Aluno aluno2 = new Aluno("Luna", 6.1);
		Aluno aluno3 = new Aluno("Gui", 1.1);
		Aluno aluno4 = new Aluno("Gabi", 7.0);

		List<Aluno> alunos = Arrays.asList(aluno1, aluno2, aluno3, aluno4);

		Predicate<Aluno> aprovado = aluno -> aluno.nota >= 7;
		Predicate<Aluno> reprovado = aprovado.negate();
		
		System.out.println(alunos.stream().allMatch(aprovado));
		System.out.println(alunos.stream().anyMatch(aprovado));
		System.out.println(alunos.stream().noneMatch(reprovado));
	}
}
