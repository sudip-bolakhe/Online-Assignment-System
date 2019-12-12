package com.sushmita.onlineassignmentsystem.controller;

import com.sushmita.onlineassignmentsystem.model.Feedback;
import com.sushmita.onlineassignmentsystem.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping("/list")
    public List<Feedback> getAll(){
        return feedbackService.getAllFeedback();
    }

    @PostMapping("/save")
    public Feedback addFeedback(@RequestBody Feedback feedback){
        return feedbackService.saveOrUpdateFeedback(feedback);
    }

    @PutMapping("/edit")
    public Feedback editFeedback(@RequestBody Feedback feedback){
        return feedbackService.saveOrUpdateFeedback(feedback);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){

        feedbackService.delete(id);
    }

    @GetMapping("/count")
    public double count(){
        return feedbackService.countAll();
    }
}
