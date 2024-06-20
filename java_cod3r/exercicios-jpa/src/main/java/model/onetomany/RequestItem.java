package model.onetomany;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import model.basic.Product;

@Entity
public class RequestItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	private Request request;

	@ManyToOne
	private Product product;

	@Column(nullable = false)
	private Integer quantity;

	@Column(nullable = false)
	private Double price;

	public RequestItem() {
	}

	public RequestItem(Request request, Product product, Integer quantity) {
		super();
		this.setProduct(product);
		this.setRequest(request);
		this.setQuantity(quantity);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Request getRequest() {
		return request;
	}

	public void setRequest(Request request) {
		this.request = request;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
		
		if (product != null && this.price == null) {
			this.setPrice(product.getPrice());
		}
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

}
