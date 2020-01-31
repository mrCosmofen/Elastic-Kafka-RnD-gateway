package com.epam.elastic_kafka_rnd.gateway.repository;

import com.epam.elastic_kafka_rnd.gateway.domain.Work;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Work entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WorkRepository extends <Work, Long> {

}
