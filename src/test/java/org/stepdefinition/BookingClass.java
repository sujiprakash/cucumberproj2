package org.stepdefinition;

import org.junit.Assert;
import org.pojo.BookingPojo;
import org.pom.PageObjectManager;

import io.cucumber.java.en.Then;

public class BookingClass extends BaseClass{
	public PageObjectManager pom;
	public BookingPojo bp;
	@Then("User enter {string},{string},{string}")
	public void user_enter(String firstName, String lastName, String address) {
		pom=PageObjectManager.getPom();
		bp=pom.getBookingPojo();
	    fillTextbox(bp.getFirstName(), firstName);
	    fillTextbox(bp.getLastName(), lastName);
	    fillTextbox(bp.getAddress(), address);
	    
	}

	@Then("User enter {string},{string},{string},{string},{string}")
	public void user_enter(String cardNo, String cardType, String expMonth, String expYr, String cvv) {
	    fillTextbox(bp.getCardNo(), cardNo);
	    selectDropDownByValue(bp.getCardType(), cardType);
	    selectDropDownByValue(bp.getExpMonth(), expMonth);
	    selectDropDownByValue(bp.getExpYr(), expYr);
	    fillTextbox(bp.getCvv(), cvv);
	}

	@Then("User click BookNow button")
	public void user_click_BookNow_button() throws InterruptedException {
	    btnClick(bp.getBtnBook());
	    Thread.sleep(7000);
	}

	@Then("User should get OrderNumber")
	public void user_should_get_OrderNumber() {
	    Assert.assertTrue(bp.getOrderNo().isDisplayed());
	}
}
