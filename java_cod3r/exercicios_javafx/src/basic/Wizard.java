package basic;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class Wizard extends Application {

	private Stage stage;
	private Scene scene1;
	private Scene scene2;
	private Scene scene3;

	public static void main(String[] args) {
		launch(args);
	}

	@Override
	public void start(Stage primaryStage) throws Exception {
		stage = primaryStage;

		createScene1();
		createScene2();
		createScene3();

		stage.setScene(scene1);
		stage.setTitle("Wizard - Stage 1");
		stage.show();
	}

	private void createScene1() {
		Button nextSceneButton = new Button("Próxima cena (2) >>");
		nextSceneButton.setOnMouseClicked(e -> {
			stage.setScene(scene2);
			stage.setTitle("Wizard - Stage 2");
		});

		HBox box = new HBox();
		box.setAlignment(Pos.CENTER);
		box.getChildren().add(nextSceneButton);

		scene1 = new Scene(box, 400, 400);
	}

	private void createScene2() {
		Button nextSceneButton = new Button("Próxima cena (3) >>");
		nextSceneButton.setOnMouseClicked(e -> {
			stage.setScene(scene3);
			stage.setTitle("Wizard - Stage 3");
		});
		
		Button previousSceneButton = new Button("<< (1) Voltar cena");
		previousSceneButton.setOnMouseClicked(e -> {
			stage.setScene(scene1);
			stage.setTitle("Wizard - Stage 1");
		});

		HBox box = new HBox();
		box.setAlignment(Pos.CENTER);
		box.setSpacing(10);
		box.getChildren().add(previousSceneButton);
		box.getChildren().add(nextSceneButton);

		scene2 = new Scene(box, 400, 400);
	}
	
	private void createScene3() {
		Button previousSceneButton = new Button("<< (2) Voltar cena");
		previousSceneButton.setOnMouseClicked(e -> {
			stage.setScene(scene2);
			stage.setTitle("Wizard - Stage 2");
		});
		
		Button finishButton = new Button("Finalizar!");
		finishButton.setOnMouseClicked(e -> {
			System.exit(0);
		});

		HBox box = new HBox();
		box.setAlignment(Pos.CENTER);
		box.setSpacing(10);
		box.getChildren().add(previousSceneButton);
		box.getChildren().add(finishButton);

		scene3 = new Scene(box, 400, 400);
	}
}
