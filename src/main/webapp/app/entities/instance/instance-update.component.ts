import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IInstance, Instance } from 'app/shared/model/instance.model';
import { InstanceService } from './instance.service';
import { IWork } from 'app/shared/model/work.model';
import { WorkService } from 'app/entities/work/work.service';

@Component({
  selector: 'jhi-instance-update',
  templateUrl: './instance-update.component.html'
})
export class InstanceUpdateComponent implements OnInit {
  isSaving = false;

  works: IWork[] = [];

  editForm = this.fb.group({
    id: [],
    type: [],
    title: [],
    language: [],
    publicationDate: [],
    workId: []
  });

  constructor(
    protected instanceService: InstanceService,
    protected workService: WorkService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ instance }) => {
      this.updateForm(instance);

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

  updateForm(instance: IInstance): void {
    this.editForm.patchValue({
      id: instance.id,
      type: instance.type,
      title: instance.title,
      language: instance.language,
      publicationDate: instance.publicationDate != null ? instance.publicationDate.format(DATE_TIME_FORMAT) : null,
      workId: instance.workId
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const instance = this.createFromForm();
    if (instance.id !== undefined) {
      this.subscribeToSaveResponse(this.instanceService.update(instance));
    } else {
      this.subscribeToSaveResponse(this.instanceService.create(instance));
    }
  }

  private createFromForm(): IInstance {
    return {
      ...new Instance(),
      id: this.editForm.get(['id'])!.value,
      type: this.editForm.get(['type'])!.value,
      title: this.editForm.get(['title'])!.value,
      language: this.editForm.get(['language'])!.value,
      publicationDate:
        this.editForm.get(['publicationDate'])!.value != null
          ? moment(this.editForm.get(['publicationDate'])!.value, DATE_TIME_FORMAT)
          : undefined,
      workId: this.editForm.get(['workId'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IInstance>>): void {
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
