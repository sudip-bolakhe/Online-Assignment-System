package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Answer;

import java.util.List;

public interface AnswerService {

    List<Answer> getAllAnswer();
    Answer saveOrUpdateAnswer(Answer answer);
}
