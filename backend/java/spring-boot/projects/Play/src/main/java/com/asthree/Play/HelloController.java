package com.asthree.Play;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
  private final String platform;
  private final PlayAiService aiService;

  public HelloController(@Value("${spring.application.name}") String platform, PlayAiService aiService) {
    this.platform = platform;
    this.aiService = aiService;
  }

  @GetMapping("/")
  public String hello() {
    return this.aiService.generateGreeting(platform);
  }

}
