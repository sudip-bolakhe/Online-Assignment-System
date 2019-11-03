package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Question;
import com.sushmita.onlineassignmentsystem.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/list")
    public List<Question> getAll(){
        return questionService.getAllQuestion();
    }

    @PostMapping("/save")
    public Question addQuestion(@RequestBody Question question){
        return questionService.saveOrUpdateQuestion(question);
    }

    @PutMapping("/edit")
    public Question editQuestion(@RequestBody Question question){
        return questionService.saveOrUpdateQuestion(question);
    }
}
