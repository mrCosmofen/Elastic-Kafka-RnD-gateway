package com.epam.elastic_kafka_rnd.gateway.repository;

import com.epam.elastic_kafka_rnd.gateway.domain.Agent;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Agent entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AgentRepository extends <Agent, Long> {

}
