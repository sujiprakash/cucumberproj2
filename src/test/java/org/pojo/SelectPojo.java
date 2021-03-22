package org.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.stepdefinition.BaseClass;

public class SelectPojo extends BaseClass{

	
	public SelectPojo() {
		
		PageFactory.initElements(driver, this);
	}
	

	
	@FindBy(id="radiobutton_0")
	private WebElement selectRadio;
	
	@FindBy(id="continue")
	private WebElement contBtn;

	public WebElement getSelectRadio() {
		return selectRadio;
	}

	public WebElement getContBtn() {
		return contBtn;
	}
}
