package layout;

import java.util.ArrayList;
import java.util.List;

import javafx.geometry.Insets;
import javafx.geometry.Orientation;
import javafx.geometry.Pos;
import javafx.scene.layout.TilePane;

public class TilePaneTest extends TilePane {

	public TilePaneTest() {

		List<Square> squares = new ArrayList<>();

		for (int i = 1; i < 9; i++) {
			squares.add(new Square(i * 10));
		}

		setPadding(new Insets(20, 10, 30, 15));
		setVgap(10);
		setHgap(10);
		
		setOrientation(Orientation.VERTICAL);
		setTileAlignment(Pos.BOTTOM_RIGHT);
		
		getChildren().addAll(squares);
	}
}
