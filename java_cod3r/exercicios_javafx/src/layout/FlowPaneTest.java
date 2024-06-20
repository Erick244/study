package layout;

import javafx.geometry.Insets;
import javafx.geometry.Orientation;
import javafx.geometry.Pos;
import javafx.scene.layout.FlowPane;

public class FlowPaneTest extends FlowPane {

	public FlowPaneTest() {
		
		Square square1 = new Square();
		Square square2 = new Square();
		Square square3 = new Square();
		Square square4 = new Square();
		Square square5 = new Square();
		
		setHgap(10);
		setVgap(10);
		setPadding(new Insets(10));
		
		setOrientation(Orientation.VERTICAL);
		setAlignment(Pos.CENTER);
		
		
		getChildren().addAll(square1, square2, square3, square4, square5);
	}
}
