import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IWork, Work } from 'app/shared/model/work.model';
import { WorkService } from './work.service';

@Component({
  selector: 'jhi-work-update',
  templateUrl: './work-update.component.html'
})
export class WorkUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    type: [],
    genre: [],
    title: []
  });

  constructor(protected workService: WorkService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ work }) => {
      this.updateForm(work);
    });
  }

  updateForm(work: IWork): void {
    this.editForm.patchValue({
      id: work.id,
      type: work.type,
      genre: work.genre,
      title: work.title
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const work = this.createFromForm();
    if (work.id !== undefined) {
      this.subscribeToSaveResponse(this.workService.update(work));
    } else {
      this.subscribeToSaveResponse(this.workService.create(work));
    }
  }

  private createFromForm(): IWork {
    return {
      ...new Work(),
      id: this.editForm.get(['id'])!.value,
      type: this.editForm.get(['type'])!.value,
      genre: this.editForm.get(['genre'])!.value,
      title: this.editForm.get(['title'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IWork>>): void {
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
}
