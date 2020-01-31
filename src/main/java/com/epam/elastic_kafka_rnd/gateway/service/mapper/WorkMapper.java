package com.epam.elastic_kafka_rnd.gateway.service.mapper;

import com.epam.elastic_kafka_rnd.gateway.domain.*;
import com.epam.elastic_kafka_rnd.gateway.service.dto.WorkDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Work} and its DTO {@link WorkDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface WorkMapper extends EntityMapper<WorkDTO, Work> {


    @Mapping(target = "agents", ignore = true)
    @Mapping(target = "removeAgent", ignore = true)
    @Mapping(target = "instances", ignore = true)
    @Mapping(target = "removeInstance", ignore = true)
    Work toEntity(WorkDTO workDTO);
}
