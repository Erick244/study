package basic;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class FirstFX extends Application {

	@Override
	public void start(Stage primaryStage) throws Exception {
		
		Button buttonA = new Button("A"); 
		Button buttonB = new Button("B"); 
		Button buttonC = new Button("C"); 
		
		VBox box = new VBox();
		box.setSpacing(10);
		box.setAlignment(Pos.CENTER);
		box.getChildren().add(buttonA);
		box.getChildren().add(buttonB);
		box.getChildren().add(buttonC);
		
		buttonC.setOnAction(e -> System.exit(0));
		
		Scene scene = new Scene(box, 400, 400);
		
		primaryStage.setScene(scene);
		primaryStage.show();
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}
