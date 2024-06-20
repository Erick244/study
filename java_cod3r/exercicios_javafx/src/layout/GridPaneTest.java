package layout;

import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.RowConstraints;

public class GridPaneTest extends GridPane {

	public GridPaneTest() {

		Box box1 = new Box().whithText("1");
		Box box2 = new Box().whithText("2");
		Box box3 = new Box().whithText("3");
		Box box4 = new Box().whithText("4");
		Box box5 = new Box().whithText("5");
		Box box6 = new Box().whithText("6");

		setGridLinesVisible(true);
		
		getColumnConstraints().addAll(
				columnConstraints(),
				columnConstraints(),
				columnConstraints(),
				columnConstraints(),
				columnConstraints()
		);
		
		getRowConstraints().addAll(
				rowConstraints(),
				rowConstraints(),
				rowConstraints(),
				rowConstraints(),
				rowConstraints()
		);
		
		setVgap(10);
		setHgap(10);
		
		add(box1, 0, 0, 2, 2);
		add(box2, 1,  1, 2, 2);
		add(box3, 4, 2, 1, 3);
		add(box4, 3, 1);
		add(box5, 0, 4, 2, 1);
		add(box6, 3, 3);
	}
	
	private ColumnConstraints columnConstraints() {
		ColumnConstraints columnConstraints = new ColumnConstraints();
		columnConstraints.setPercentWidth(20);
		columnConstraints.setFillWidth(true);
		
		return columnConstraints;
	}
	
	private RowConstraints rowConstraints() {
		RowConstraints rowConstraints = new RowConstraints();
		rowConstraints.setPercentHeight(20);
		rowConstraints.setFillHeight(true);
		
		return rowConstraints;
		
	}

}
