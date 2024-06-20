package layout;

import javafx.scene.layout.BorderPane;

public class BorderPaneTest extends BorderPane {
	
	public BorderPaneTest() {
		
		Box box1 = new Box().whithText("Topo");
		setTop(box1);
		
		Box box2 = new Box().whithText("Esquerda");
		setLeft(box2);
		
		Box box3 = new Box().whithText("Direita");
		setRight(box3);
		
		Box box4 = new Box().whithText("Rodapé");
		setBottom(box4);
		
		Box box5 = new Box().whithText("Centro");
		setCenter(box5);
	}
}
