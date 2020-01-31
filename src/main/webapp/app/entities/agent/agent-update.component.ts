import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAgent, Agent } from 'app/shared/model/agent.model';
import { AgentService } from './agent.service';
import { IWork } from 'app/shared/model/work.model';
import { WorkService } from 'app/entities/work/work.service';

@Component({
  selector: 'jhi-agent-update',
  templateUrl: './agent-update.component.html'
})
export class AgentUpdateComponent implements OnInit {
  isSaving = false;

  works: IWork[] = [];

  editForm = this.fb.group({
    id: [],
    firstName: [],
    lastName: [],
    workId: []
  });

  constructor(
    protected agentService: AgentService,
    protected workService: WorkService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ agent }) => {
      this.updateForm(agent);

      this.workService
        .query()
        .pipe(
          map((res: HttpResponse<IWork[]>) => {
            return res.body ? res.body : [];
          })
        )
        .subscribe((resBody: IWork[]) => (this.works = resBody));
    });
  }

  updateForm(agent: IAgent): void {
    this.editForm.patchValue({
      id: agent.id,
      firstName: agent.firstName,
      lastName: agent.lastName,
      workId: agent.workId
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const agent = this.createFromForm();
    if (agent.id !== undefined) {
      this.subscribeToSaveResponse(this.agentService.update(agent));
    } else {
      this.subscribeToSaveResponse(this.agentService.create(agent));
    }
  }

  private createFromForm(): IAgent {
    return {
      ...new Agent(),
      id: this.editForm.get(['id'])!.value,
      firstName: this.editForm.get(['firstName'])!.value,
      lastName: this.editForm.get(['lastName'])!.value,
      workId: this.editForm.get(['workId'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAgent>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IWork): any {
    return item.id;
  }
}
