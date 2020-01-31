package com.epam.elastic_kafka_rnd.gateway.service.mapper;

import com.epam.elastic_kafka_rnd.gateway.domain.*;
import com.epam.elastic_kafka_rnd.gateway.service.dto.InstanceDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Instance} and its DTO {@link InstanceDTO}.
 */
@Mapper(componentModel = "spring", uses = {WorkMapper.class})
public interface InstanceMapper extends EntityMapper<InstanceDTO, Instance> {

    @Mapping(source = "work.id", target = "workId")
    InstanceDTO toDto(Instance instance);

    @Mapping(source = "workId", target = "work")
    Instance toEntity(InstanceDTO instanceDTO);
}
