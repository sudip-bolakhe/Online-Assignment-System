package com.sushmita.onlineassignmentsystem.repository;

import com.sushmita.onlineassignmentsystem.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
}
