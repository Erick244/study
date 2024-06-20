package layout;

import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;

public class Square extends Rectangle {

	private static int colorIndex = 0;

	private String[] colors = { "#c33c5e", "#39aac6", "#28d79a", "#fb750e", "#6657a8", "#f9060e" };

	public Square() {
		this(100);
	}

	public Square(int side) {

		setWidth(side);
		setHeight(side);

		setFill(Color.web(colors[colorIndex]));

		colorIndex++;
		if (colorIndex == 6) colorIndex = 0;
	}

}
