package jdbc;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class FabricaConexao {

	public static Connection getConexao() {
		try {
			Properties props = getProperties();
			final String url = props.getProperty("banco.url");
			final String usuario = props.getProperty("banco.usuario");
			final String senha = props.getProperty("banco.senha");
			
			return DriverManager.getConnection(url, usuario, senha);
		} catch (SQLException | IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	private static Properties getProperties() throws IOException {
		Properties props = new Properties();
		String caminho = "/conexao.properties";
		
		props.load(FabricaConexao.class.getResourceAsStream(caminho));
		
		return props;
	}
}
