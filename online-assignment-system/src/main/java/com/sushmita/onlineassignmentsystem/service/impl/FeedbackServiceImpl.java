package com.sushmita.onlineassignmentsystem.service.impl;

import com.sushmita.onlineassignmentsystem.model.Answer;
import com.sushmita.onlineassignmentsystem.model.Feedback;
import com.sushmita.onlineassignmentsystem.model.Teacher;
import com.sushmita.onlineassignmentsystem.repository.AnswerRepository;
import com.sushmita.onlineassignmentsystem.repository.FeedbackRepository;
import com.sushmita.onlineassignmentsystem.repository.TeacherRepository;
import com.sushmita.onlineassignmentsystem.repository.UserRepository;
import com.sushmita.onlineassignmentsystem.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;
    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Override
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback saveOrUpdateFeedback(Feedback feedback) {

        Teacher teacher = teacherRepository.save(feedback.getTeacher());
        feedback.setTeacher(teacher);
        Answer answer = answerRepository.save(feedback.getAnswer());
        feedback.setAnswer(answer);
        return feedbackRepository.save(feedback);
    }
}
