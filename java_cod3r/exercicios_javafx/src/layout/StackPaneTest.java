package layout;

import javafx.application.Platform;
import javafx.scene.layout.StackPane;

public class StackPaneTest extends StackPane {

	public StackPaneTest() {

		Box box1 = new Box().whithText("1");
		Box box2 = new Box().whithText("2");
		Box box3 = new Box().whithText("3");
		Box box4 = new Box().whithText("4");
		Box box5 = new Box().whithText("5");
		Box box6 = new Box().whithText("6");

		getChildren().addAll(box1, box2, box3, box4, box5, box6);

		setOnMouseClicked(e -> {
			Double halfScene = getScene().getWidth() / 2;

			if (e.getSceneX() > halfScene) {
				getChildren().get(0).toFront();
			} else {
				getChildren().get(5).toBack();
			}
		});

		Thread thread = new Thread(() -> {
			while (true) {
				try {
					Thread.sleep(3000);

					Platform.runLater(() -> {
						getChildren().get(0).toFront();
					});
				} catch (Exception e) {
					System.out.println(e.getMessage());
				}
			}
		});

		thread.setDaemon(true);
		thread.start();
	}

}