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

    public Review findReview(Long id){return em.find(Review.class, id);}

    public List<Review> findAllByPlace_Id(Long id){
        return em.createQuery("select r from Review r where r.place.id = :id",Review.class)
                .setParameter("id", id)
                .getResultList();
    }

    public List<Review> findLatestReview(){
        return em.createQuery("select r from Review r order by r.createdAt desc",Review.class)
                .setFirstResult(0)
                .setMaxResults(10)
                .getResultList();
    }

}
