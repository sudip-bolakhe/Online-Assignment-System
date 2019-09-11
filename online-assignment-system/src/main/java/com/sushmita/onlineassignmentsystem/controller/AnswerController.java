package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Answer;
import com.sushmita.onlineassignmentsystem.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping("/list")
    public List<Answer> getAll(){
        return answerService.getAllAnswer();
    }

    @PostMapping("/save")
    public Answer addAnswer(@RequestBody Answer answer){
        return answerService.saveOrUpdateAnswer(answer);
    }

    @PutMapping("/edit")
    public Answer editAnswer(@RequestBody Answer answer){
        return answerService.saveOrUpdateAnswer(answer);
    }
}