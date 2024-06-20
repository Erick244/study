package layout;

import javafx.application.Application;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class AppLayout extends Application {

	public static void main(String[] args) {
		launch(args);
	}

	@Override
	public void start(Stage primaryStage) throws Exception {
		Parent rootParent = null;
		
//		rootParent = new AnchorPaneTest();
//		rootParent = new BorderPaneTest();
//		rootParent = new FlowPaneTest();
//		rootParent = new GridPaneTest();
//		rootParent = new StackPaneTest();
		rootParent = new TilePaneTest();

		Scene scene = new Scene(rootParent, 800, 600);
		
		primaryStage.setScene(scene);
		primaryStage.setTitle("Gerenciadores de Layout");
		primaryStage.show();
	}
}
