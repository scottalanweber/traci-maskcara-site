import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})

export class MultiStepFormComponent implements OnInit, OnChanges {
  @Input() readonly formContent: any;
  @Input() readonly formStatus: boolean;

  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  activeStepIndex: number;
  currentFormContent: Array<any>;
  formData: any;
  formFields: Array<Array<string>>;
  masterFormFields: Array<string>;
  stepItems: Array<any>;
  masterForm: Array<FormGroup>;
  isRequesting: boolean;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.activeStepIndex = 0;
    this.masterForm = [];
    this.currentFormContent = [];
    this.formFields = [];
    this.stepItems = this.formContent;

    this.stepItems.forEach((data, i) => {
      this.currentFormContent.push(this.stepItems[i]['data']);
      this.formFields.push(Object.keys(this.currentFormContent[i]));
      this.masterForm.push(this.buildForm(this.currentFormContent[i]));
    });
  }

  ngOnChanges() {
    if (this.formStatus) {
      this.masterForm.forEach(formGroup => {
        formGroup.reset();
      });
      this.activeStepIndex = 0;
    }

    this.isRequesting = false;
  }

  // build separate FormGroups for each form
  buildForm(currentFormContent: any): FormGroup {
    const formDetails = Object.keys(currentFormContent).reduce(
      (obj, key) => {
        obj[key] = ['', this.getValidators(currentFormContent[key])];
        return obj;
      }, {}
    );

    return this._formBuilder.group(formDetails);
  }

  getValidators(formField: any): Validators {
    return Object.keys(formField.validations).map(validator => {
      if (validator === 'required' || validator === 'email') {
        return Validators[validator];
      } else {
        return Validators[validator](formField.validations[validator]);
      }
    });
  }

  getValidationMessage(formIndex: number, formFieldName: string): string {
    const formErrors = this.masterForm[formIndex].get(formFieldName).errors;
    const errorMessages = this.currentFormContent[formIndex][formFieldName]
      .errors;

    return errorMessages[Object.keys(formErrors)[0]];
  }

  goToStep(step: string): void {
    this.activeStepIndex =
      step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;

    this.setFormPreview();
  }

  setFormPreview(): void {
    this.formData = this.masterForm.reduce(
      (masterForm, currentForm) => ({ ...masterForm, ...currentForm.value }),
      {}
    );

    this.masterFormFields = Object.keys(this.formData);
  }

  onFormSubmit(): void {
    this.setFormPreview();
    this.isRequesting = true;
    this.formSubmit.emit(this.formData);
  }

  trackByFn(index: number): number {
    return index;
  }
}
