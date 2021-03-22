package org.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src\\test\\resources\\Rerun\\failed.txt", glue = "org.stepdefinition", dryRun = false,plugin= {
       		  "html:src\\test\\resources\\Reports",
       		  "json:src\\test\\resources\\Reports\\outp.json",
       		  "junit:src\\test\\resources\\Reports\\output.xml",
       		  "rerun:src\\test\\resources\\Rerun\\failed.txt"
       		 
        })
public class TestRerunner {

}
