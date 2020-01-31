import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { InstanceService } from 'app/entities/instance/instance.service';
import { IInstance, Instance } from 'app/shared/model/instance.model';

describe('Service Tests', () => {
  describe('Instance Service', () => {
    let injector: TestBed;
    let service: InstanceService;
    let httpMock: HttpTestingController;
    let elemDefault: IInstance;
    let expectedResult: IInstance | IInstance[] | boolean | null;
    let currentDate: moment.Moment;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(InstanceService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Instance(0, 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', currentDate);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            publicationDate: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        service
          .find(123)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Instance', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            publicationDate: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            publicationDate: currentDate
          },
          returnedFromService
        );
        service
          .create(new Instance())
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp.body));
        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Instance', () => {
        const returnedFromService = Object.assign(
          {
            type: 'BBBBBB',
            title: 'BBBBBB',
            language: 'BBBBBB',
            publicationDate: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            publicationDate: currentDate
          },
          returnedFromService
        );
        service
          .update(expected)
          .pipe(take(1))
          .subscribe(resp => (expectedResult = resp.body));
        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Instance', () => {
        const returnedFromService = Object.assign(
          {
            type: 'BBBBBB',
            title: 'BBBBBB',
            language: 'BBBBBB',
            publicationDate: currentDate.format(DATE_TIME_FORMAT)
          },
          elemDefault
        );
        const expected = Object.assign(
          {
            publicationDate: currentDate
          },
          returnedFromService
        );
        service
          .query()
          .pipe(
            take(1),
            map(resp => resp.body)
          )
          .subscribe(body => (expectedResult = body));
        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Instance', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
