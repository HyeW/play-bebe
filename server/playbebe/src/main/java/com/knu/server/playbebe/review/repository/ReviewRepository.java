package com.knu.server.playbebe.review.repository;

import com.knu.server.playbebe.review.model.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewRepository {

    private final EntityManager em;

    public void saveReview(Review review){em.persist(review);}

    public List<Review> findLatestReview(){
        return em.createQuery("select r from Review r order by r.createdAt desc",Review.class)
                .setFirstResult(0)
                .setMaxResults(10)
                .getResultList();
    }

}
