package com.epam.elastic_kafka_rnd.gateway.repository;

import com.epam.elastic_kafka_rnd.gateway.domain.Instance;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Instance entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InstanceRepository extends <Instance, Long> {

}
