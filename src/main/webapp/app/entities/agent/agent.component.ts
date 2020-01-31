import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IAgent } from 'app/shared/model/agent.model';
import { AgentService } from './agent.service';
import { AgentDeleteDialogComponent } from './agent-delete-dialog.component';

@Component({
  selector: 'jhi-agent',
  templateUrl: './agent.component.html'
})
export class AgentComponent implements OnInit, OnDestroy {
  agents?: IAgent[];
  eventSubscriber?: Subscription;

  constructor(protected agentService: AgentService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.agentService.query().subscribe((res: HttpResponse<IAgent[]>) => {
      this.agents = res.body ? res.body : [];
    });
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInAgents();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IAgent): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInAgents(): void {
    this.eventSubscriber = this.eventManager.subscribe('agentListModification', () => this.loadAll());
  }

  delete(agent: IAgent): void {
    const modalRef = this.modalService.open(AgentDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.agent = agent;
  }
}
