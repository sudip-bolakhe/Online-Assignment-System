package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Question;

import java.time.LocalDate;
import java.util.List;

public interface QuestionService {

    List<Question> getAllQuestion(long teacherId);

     Question saveOrUpdateQuestion(Question question);

     List<Question> getBySubjectAndClass(String subject, String grade);
}
