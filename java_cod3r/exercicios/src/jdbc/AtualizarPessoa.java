package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class AtualizarPessoa {

	public static void main(String[] args) throws SQLException {

		Connection conexao = FabricaConexao.getConexao();
		String sql = "UPDATE pessoas SET nome = ? WHERE codigo = ?";

		Scanner entrada = new Scanner(System.in);

		System.out.print("Insira o novo Nome da pessoa: ");
		String nomePesquisa = entrada.nextLine();

		System.out.print("Insira o código da pessoa: ");
		int codigoPesquisa = entrada.nextInt();

		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setString(1, nomePesquisa);
		stmt.setInt(2, codigoPesquisa);
		
		stmt.execute();
		
		System.out.println("Atualização realizada com sucesso!");
		conexao.close();
		stmt.close();
		entrada.close();
	}
}
