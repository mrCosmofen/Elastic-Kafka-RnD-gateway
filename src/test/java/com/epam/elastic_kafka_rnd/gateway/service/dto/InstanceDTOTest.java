package com.epam.elastic_kafka_rnd.gateway.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.epam.elastic_kafka_rnd.gateway.web.rest.TestUtil;

public class InstanceDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(InstanceDTO.class);
        InstanceDTO instanceDTO1 = new InstanceDTO();
        instanceDTO1.setId();
        InstanceDTO instanceDTO2 = new InstanceDTO();
        assertThat(instanceDTO1).isNotEqualTo(instanceDTO2);
        instanceDTO2.setId(instanceDTO1.getId());
        assertThat(instanceDTO1).isEqualTo(instanceDTO2);
        instanceDTO2.setId();
        assertThat(instanceDTO1).isNotEqualTo(instanceDTO2);
        instanceDTO1.setId(null);
        assertThat(instanceDTO1).isNotEqualTo(instanceDTO2);
    }
}
