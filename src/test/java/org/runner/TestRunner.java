package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.reports.JVMReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources", glue = "org.stepdefinition", dryRun = false,tags= {"@sanity"},
plugin= {
       		  "html:src\\test\\resources\\Reports",
       		  "json:src\\test\\resources\\Reports\\outp.json",
       		  "junit:src\\test\\resources\\Reports\\output.xml",
       		  "rerun:src\\test\\resources\\Rerun\\failed.txt"
       		 
        })
public class TestRunner {
	@AfterClass
	public static void JVMReportGeneration() {
		
		JVMReport.generateJVMReport(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports\\outp.json");
	}
}
