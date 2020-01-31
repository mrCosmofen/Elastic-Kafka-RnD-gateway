package com.epam.elastic_kafka_rnd.gateway.service.mapper;

import com.epam.elastic_kafka_rnd.gateway.domain.*;
import com.epam.elastic_kafka_rnd.gateway.service.dto.AgentDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Agent} and its DTO {@link AgentDTO}.
 */
@Mapper(componentModel = "spring", uses = {WorkMapper.class})
public interface AgentMapper extends EntityMapper<AgentDTO, Agent> {

    @Mapping(source = "work.id", target = "workId")
    AgentDTO toDto(Agent agent);

    @Mapping(source = "workId", target = "work")
    Agent toEntity(AgentDTO agentDTO);
}
