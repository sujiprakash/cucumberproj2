package org.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	public static WebDriver driver;
	
	public static void launchBrowser() {
		
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
	}
	
	public static void launchURL(String url) {
		driver.get(url);
		
	}
	
	public static void fillTextbox(WebElement element,String value) {
		
		element.sendKeys(value);
	}
	
	public static void btnClick(WebElement element) {
		element.click();
	}
	
	public static void selectDropDownByValue(WebElement element,String value) {
		Select s= new Select(element);
		s.selectByValue(value);
		
	}
	
	
	
	
}
