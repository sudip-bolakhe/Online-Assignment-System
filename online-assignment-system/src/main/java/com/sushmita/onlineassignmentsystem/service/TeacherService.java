package com.sushmita.onlineassignmentsystem.service;

import com.sushmita.onlineassignmentsystem.model.Teacher;
import java.util.List;

public interface TeacherService {
    List<Teacher> getAllTeacher();

    Teacher saveOrUpdateTeacher(Teacher teacher);
}
