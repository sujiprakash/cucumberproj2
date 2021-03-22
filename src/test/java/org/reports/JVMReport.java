package org.reports;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {

	
	public static void generateJVMReport(String json) {
		File f=new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports\\JVMReports");
		 Configuration con=new Configuration(f, "Adactin");
		 con.addClassifications("Platform name", "windows");
		 con.addClassifications("Platform version", "10");
		 con.addClassifications("Browser name", "chrome");
		 
		 List<String> jsonFiles=new ArrayList<String>();
		 jsonFiles.add(json);
		 ReportBuilder r=new ReportBuilder(jsonFiles, con);
		 r.generateReports();
		
	}
}
