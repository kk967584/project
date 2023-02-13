package com.spring_boot_mybatis.project;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
	/*
	 * @ResponseBody
	 * 
	 * @RequestMapping("/") public String home() { return "Hello Boot"; }
	 */
	
	/*
	 * @RequestMapping("/") public String home() { return "index"; }
	 */
  
  @RequestMapping("/hello")
  public String hello(Model model) {
	  model.addAttribute("message", "안녕하세요");
	  return "hello";
  }
}
