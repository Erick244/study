package com.app.logging;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Logger {

	public static void info(String msg) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		System.out.println("[INFO] " + dateFormat.format(new Date()) + " - " + msg);
	}
}
