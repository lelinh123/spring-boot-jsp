package com.lhlinh.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
@ComponentScan("com.lhlinh")
public class WebConfig implements WebMvcConfigurer{

	@Bean
	 public InternalResourceViewResolver
	 getInternalResourceViewResolver() {
	 InternalResourceViewResolver resolver = new
	 InternalResourceViewResolver();
	 resolver.setViewClass(JstlView.class);
	 resolver.setPrefix("/WEB-INF/views/");
	 resolver.setSuffix(".jsp");
	 return resolver;
	 }
	
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**")
                .addResourceLocations("/WEB-INF/static/");
//
//        registry.addResourceHandler("/static/css/**")
//                .addResourceLocations("/WEB-INF/static/css/");
//
//        registry.addResourceHandler("/static/js/**")
//                .addResourceLocations("/WEB-INF/js/");
//        registry.addResourceHandler("/static/vendor/**")
//        .addResourceLocations("/WEB-INF/js/");
    }
}
