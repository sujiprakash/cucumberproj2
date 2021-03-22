package org.stepdefinition;

import org.pojo.SelectPojo;
import org.pom.PageObjectManager;

import io.cucumber.java.en.Then;

public class SelectHotel extends BaseClass{
	public PageObjectManager pom;
	public SelectPojo slp;
	@Then("User should be able to select hotel")
	public void user_should_be_able_to_select_hotel() throws InterruptedException {
		pom=PageObjectManager.getPom();
		slp=pom.getSelectPojo();
	    Thread.sleep(3000);
		btnClick(slp.getSelectRadio());
	}

	@Then("User click continue button")
	public void user_click_continue_button() {
		btnClick(slp.getContBtn());
		
	
	}
}
