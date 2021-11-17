package testrun;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "src/test/java/features" }, glue = "steps", monochrome = true, plugin = { "pretty",
		"html:report" })

public class Runner extends AbstractTestNGCucumberTests {

}
            

