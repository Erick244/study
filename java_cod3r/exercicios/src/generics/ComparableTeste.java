package generics;

import java.util.TreeSet;

public class ComparableTeste {

	public static void main(String[] args) {
		TreeSet<Integer> nums = new TreeSet<>();
		
		nums.add(10);
		nums.add(1);
		nums.add(11);
		nums.add(12);
		nums.add(13);
		nums.add(154);
		nums.add(17);
		nums.add(24);
		
		for(Integer n : nums) {
			System.out.println(n);
		}
	}
}
