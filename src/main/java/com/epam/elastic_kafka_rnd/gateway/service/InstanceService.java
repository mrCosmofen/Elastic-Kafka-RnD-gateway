package com.epam.elastic_kafka_rnd.gateway.service;

import com.epam.elastic_kafka_rnd.gateway.service.dto.InstanceDTO;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.epam.elastic_kafka_rnd.gateway.domain.Instance}.
 */
public interface InstanceService {

    /**
     * Save a instance.
     *
     * @param instanceDTO the entity to save.
     * @return the persisted entity.
     */
    InstanceDTO save(InstanceDTO instanceDTO);

    /**
     * Get all the instances.
     *
     * @return the list of entities.
     */
    List<InstanceDTO> findAll();


    /**
     * Get the "id" instance.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<InstanceDTO> findOne(Long id);

    /**
     * Delete the "id" instance.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
