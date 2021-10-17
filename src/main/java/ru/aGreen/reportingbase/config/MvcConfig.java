package ru.aGreen.reportingbase.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

	public void addViewControllers(ViewControllerRegistry registry) {
//		registry.addViewController("/forming").setViewName("forming");
//		registry.addViewController("/customer").setViewName("customer");
//		registry.addViewController("/transporter").setViewName("transporter");
//		registry.addViewController("/our").setViewName("ourCompany");
//		registry.addViewController("/manager").setViewName("manager");
//		registry.addViewController("/driver").setViewName("driver");
//		registry.addViewController("/vehicle").setViewName("vehicle");
//		registry.addViewController("/trailer").setViewName("trailer");
		registry.addViewController("/login").setViewName("login");
//		registry.addViewController("/error").setViewName("error");
	}

}