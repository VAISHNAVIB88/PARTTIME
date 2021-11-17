package steps;

import org.openqa.selenium.By;


import cucumber.api.java.en.*;

public class Createlead extends Driver {
	
	String text = "ABC";
	
	@And("Enter CRMSFA link and go to Leads enter create lead")
	public void enterCrmsfa() {
		driver.findElement(By.linkText("CRM/SFA")).click();
		driver.findElement(By.linkText("Leads")).click();
		driver.findElement(By.linkText("Create Lead")).click();
	}

	@And("Enter company name as (.*)")
	public void enterCompanyName(String cName) {
		driver.findElement(By.id("createLeadForm_companyName")).sendKeys(cName);
	}

	@And("Enter First name as (.*)")
	public void enterFirstName(String fname) {
		driver.findElement(By.id("createLeadForm_firstName")).sendKeys(fname);

	}

	@And("Enter Last name as (.*)")
	public void enterLastName(String lname) {
		driver.findElement(By.id("createLeadForm_lastName")).sendKeys(lname);
	}

	@When("Click the create lead button")
	public void createLead() {
		driver.findElement(By.className("smallSubmit")).click();
	}

	@Then("Verify the lead creation")
	public void verifyCreation() {
		System.out.println(driver.getTitle());
		if (driver.findElement(By.id("viewLead_companyName_sp")).getText().contains(text)) {
			System.out.println("Lead Created Succesfully");
		}
	}
}
