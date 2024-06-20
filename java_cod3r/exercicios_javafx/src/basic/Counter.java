package basic;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class Counter extends Application {

	private Integer count = 0;

	public static void main(String[] args) {
		launch(args);
	}

	@Override
	public void start(Stage primaryStage) throws Exception {

		Label titleLabel = new Label("Counter");
		titleLabel.getStyleClass().add("title");

		Label counterNumberLabel = new Label(count.toString());
		counterNumberLabel.getStyleClass().add("counterNumberLabel");

		Button decrementButton = new Button("-");
		decrementButton.getStyleClass().add("button");
		decrementButton.setOnMouseClicked(e -> {
			count--;
			applyCounterLabelColor(counterNumberLabel);
			updateCounterLabel(counterNumberLabel);
		});

		Button incrementButton = new Button("+");
		incrementButton.getStyleClass().add("button");
		incrementButton.setOnMouseClicked(e -> {
			count++;
			applyCounterLabelColor(counterNumberLabel);
			updateCounterLabel(counterNumberLabel);
		});

		HBox containerButtonsBox = new HBox();
		containerButtonsBox.setAlignment(Pos.CENTER);
		containerButtonsBox.setSpacing(10);
		containerButtonsBox.getChildren().add(decrementButton);
		containerButtonsBox.getChildren().add(incrementButton);

		VBox mainBox = new VBox();
		mainBox.getStyleClass().add("content");
		mainBox.setAlignment(Pos.CENTER);
		mainBox.setSpacing(10);
		mainBox.getChildren().add(titleLabel);
		mainBox.getChildren().add(counterNumberLabel);
		mainBox.getChildren().add(containerButtonsBox);

		String cssPath = getClass().getResource("/basic/Counter.css").toExternalForm();

		Scene scene = new Scene(mainBox, 400, 400);
		scene.getStylesheets().add(cssPath);
		scene.getStylesheets().add("https://fonts.googleapis.com/css2?family=Kanit");

		primaryStage.setScene(scene);
		primaryStage.show();
	}
	
	private void applyCounterLabelColor(Label label) {
		label.getStyleClass().remove("textGreen");
		label.getStyleClass().remove("textRed");
		
		if (count < 0) {
			label.getStyleClass().add("textRed");
		} else if (count > 0) {
			label.getStyleClass().add("textGreen");
		}
	}
	
	private void updateCounterLabel(Label label) {
		label.setText(count.toString());
	}

	

}
