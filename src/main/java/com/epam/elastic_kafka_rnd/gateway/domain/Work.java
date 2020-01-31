package com.epam.elastic_kafka_rnd.gateway.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Work.
 */
public class Work implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    private String type;

    private String genre;

    private String title;

    private Set<Agent> agents = new HashSet<>();

    private Set<Instance> instances = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public  getId() {
        return id;
    }

    public void setId( id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public Work type(String type) {
        this.type = type;
        return this;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGenre() {
        return genre;
    }

    public Work genre(String genre) {
        this.genre = genre;
        return this;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getTitle() {
        return title;
    }

    public Work title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Agent> getAgents() {
        return agents;
    }

    public Work agents(Set<Agent> agents) {
        this.agents = agents;
        return this;
    }

    public Work addAgent(Agent agent) {
        this.agents.add(agent);
        agent.setWork(this);
        return this;
    }

    public Work removeAgent(Agent agent) {
        this.agents.remove(agent);
        agent.setWork(null);
        return this;
    }

    public void setAgents(Set<Agent> agents) {
        this.agents = agents;
    }

    public Set<Instance> getInstances() {
        return instances;
    }

    public Work instances(Set<Instance> instances) {
        this.instances = instances;
        return this;
    }

    public Work addInstance(Instance instance) {
        this.instances.add(instance);
        instance.setWork(this);
        return this;
    }

    public Work removeInstance(Instance instance) {
        this.instances.remove(instance);
        instance.setWork(null);
        return this;
    }

    public void setInstances(Set<Instance> instances) {
        this.instances = instances;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Work)) {
            return false;
        }
        return id != null && id.equals(((Work) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Work{" +
            "id=" + getId() +
            ", type='" + getType() + "'" +
            ", genre='" + getGenre() + "'" +
            ", title='" + getTitle() + "'" +
            "}";
    }
}
