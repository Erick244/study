package com.actuators.actuators;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.boot.actuate.endpoint.annotation.DeleteOperation;
import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.stereotype.Component;

@Component
@Endpoint(id = "features")
public class FeaturesEndpoint {
	private List<String> features = Arrays.asList("feature1", "feature2", "feature3");

	@ReadOperation
	public List<String> features() {
		return this.features;
	}

	@ReadOperation
	public String feature(@Selector Integer index) {
		return this.features.get(index);
	}

	@WriteOperation
	public void addFeature(@Selector String name) {
		features.add(name);
	}

	@DeleteOperation
	public void deleteFeature(@Selector String name) {
		features.remove(name);
	}

}

	

		


	

		

