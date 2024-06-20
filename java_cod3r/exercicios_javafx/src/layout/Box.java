package layout;

import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.control.Label;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.HBox;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;

public class Box extends HBox {

	private static int colorIndex = 0;
	
	private String[] colors = { "#c33c5e", "#39aac6", "#28d79a", "#fb750e", "#6657a8", "#f9060e" };

	public Box() {
		this(100, 100);
	}

	public Box(int width, int height) {
		setAlignment(Pos.CENTER);
		
		setMinWidth(width);
		setMinHeight(height);
		
		BackgroundFill bgFill = new BackgroundFill(Color.web(colors[colorIndex]), CornerRadii.EMPTY, Insets.EMPTY);
		setBackground(new Background(bgFill));
		
		colorIndex++;
		if (colorIndex == 6) colorIndex = 0;
	}
	
	public Box whithText(String text) {
		Label label = new Label(text);
		label.setFont(new Font(24));
		getChildren().add(label);
		return this;
	}
}
