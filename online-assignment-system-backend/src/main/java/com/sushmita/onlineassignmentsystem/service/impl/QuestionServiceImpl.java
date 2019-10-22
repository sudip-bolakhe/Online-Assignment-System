package com.sushmita.onlineassignmentsystem.service.impl;

import com.sushmita.onlineassignmentsystem.model.Question;
import com.sushmita.onlineassignmentsystem.model.Teacher;
import com.sushmita.onlineassignmentsystem.repository.QuestionRepository;
import com.sushmita.onlineassignmentsystem.repository.TeacherRepository;
import com.sushmita.onlineassignmentsystem.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Override
    public List<Question> getAllQuestion() {
        return questionRepository.findAll();
    }

    @Override
    public Question saveOrUpdateQuestion(Question question) {
        Teacher teacher = teacherRepository.save(question.getTeacher());
        question.setTeacher(teacher);
        return questionRepository.save(question);
    }
}
