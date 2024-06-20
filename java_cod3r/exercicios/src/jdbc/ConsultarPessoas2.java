package jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ConsultarPessoas2 {

	public static void main(String[] args) throws SQLException {

		Scanner entrada = new Scanner(System.in);
		Connection conexao = FabricaConexao.getConexao();
		
		System.out.print("Digite a sua consulta por Nomes: ");
		String consultaPorNome = "%" + entrada.nextLine().trim() + "%";

		String sql = "SELECT * FROM pessoas WHERE nome LIKE ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setString(1, consultaPorNome);
		
		ResultSet resultado = stmt.executeQuery();
		List<Pessoa> pessoas = new ArrayList<>();
		
		while(resultado.next()) {
			int codigo = resultado.getInt("codigo");
			String nome = resultado.getString("nome");
			pessoas.add(new Pessoa(codigo, nome));
		}
		
		System.out.println("Resultado da consulta: ");
		pessoas.forEach(pessoa -> System.out.println(pessoa.getCodigo() + " : " + pessoa.getNome()));
		

		stmt.close();
		conexao.close();
		entrada.close();
	}
}
