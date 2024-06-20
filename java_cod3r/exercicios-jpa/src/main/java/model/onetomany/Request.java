package model.onetomany;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Request {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private Date date;

	@OneToMany(mappedBy = "request", fetch = FetchType.EAGER)
	private List<RequestItem> items;

	public Request() {
		this(new Date());
	}

	public Request(Date date) {
		super();
		this.date = date;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<RequestItem> getItems() {
		return items;
	}

	public void setItems(List<RequestItem> items) {
		this.items = items;
	}

}
