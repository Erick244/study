package fxml;

import org.controlsfx.control.Notifications;

import javafx.fxml.FXML;
import javafx.geometry.Pos;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

public class LoginController {

	@FXML
	private TextField emailField;
	
	@FXML
	private PasswordField passwordField;
	
	public void login() {
		boolean emailIsValid = emailField.getText().equals("aluno@dev.com");
		boolean passwordIsValid = passwordField.getText().equals("12345678");
		
		if (emailIsValid && passwordIsValid) {
			Notifications.create()
				.position(Pos.TOP_RIGHT)
				.title("Login FXML")
				.text("Login efetuado com sucesso!")
				.showInformation();
		} else {
			Notifications.create()
			.position(Pos.TOP_RIGHT)
			.title("Login FXML")
			.text("Usuário ou Senha invalidos!")
			.showError();
		}
	}
}
