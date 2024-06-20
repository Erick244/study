package model.composition;

import javax.persistence.Embeddable;

@Embeddable
public class Address {

	private String streetName;
	private String complement;

	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}
}
