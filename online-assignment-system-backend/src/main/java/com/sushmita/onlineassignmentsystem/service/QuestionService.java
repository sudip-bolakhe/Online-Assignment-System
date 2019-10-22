package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Question;

import java.util.List;

public interface QuestionService {

    List<Question> getAllQuestion();

     Question saveOrUpdateQuestion(Question question);
}
