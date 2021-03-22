package org.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.pojo.LoginPojo;
import org.pom.PageObjectManager;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class LoginSteps extends BaseClass {
	public PageObjectManager pom;
	public LoginPojo loginPojo;

	@Given("User is in Adactin Login page")
	public void user_is_in_Adactin_Login_page() {
		launchBrowser();
		launchURL("https://adactinhotelapp.com/");
	}

	@When("User enter valid {string} and {string}")
	public void user_enter_valid_and(String user, String pass) throws InterruptedException {
		pom = PageObjectManager.getPom();
		loginPojo = pom.getLoginPojo();
		fillTextbox(loginPojo.getUserName(), user);
		fillTextbox(loginPojo.getPassword(), pass);
	}

	@When("User click Login button")
	public void user_click_Login_button() throws InterruptedException {
		btnClick(loginPojo.getBtnLogin());
		//Thread.sleep(4000);
	}

	@Then("User should be able to enter search hotel page")
	public void user_should_be_able_to_enter_search_hotel_page() {
		String currentUrl = driver.getCurrentUrl();
		Assert.assertTrue(currentUrl.contains("SearchHotel"));
	}

}
