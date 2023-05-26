import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'ui-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() startDateLabel: string = ''
  @Input() endDateLabel: string = ''

  @Input() startDayPlaceholder: string = ''
  @Input() endDayPlaceHolder: string = ''

  @Input() isRange: boolean = false
  @Input() max_width: boolean = false

  @Output() onStartDate: EventEmitter<string> = new EventEmitter<string>()
  @Output() onEndDate: EventEmitter<string> = new EventEmitter<string>()

  @Input() startDate: FormControl = new FormControl()
  @Input() endDate: FormControl = new FormControl()

  form: FormGroup = new FormGroup({
    startDate: this.startDate,
    endDate: this.endDate
  })

  constructor() { }

  ngOnInit(): void {
    this.emitDates(this.formatDate(this.startDate.value), this.formatDate(this.endDate.value))
  }

  formatDate(date: string): string {
    const formatDate = moment(date).format('YYYY-MM-DD HH:mm:ss')

    return formatDate
  }

  onStartDateChange($event: any): void {
    this.startDate.setValue($event.target.value)

    if ($event.target.value > this.endDate.value) {
      this.endDate.setValue($event.target.value)
      this.emitDates(this.formatDate($event.target.value), this.formatDate($event.target.value))
      return
    }

    this.onStartDate.emit(this.formatDate($event.target.value))

  }

  onEndDateChange($event: any): void {
    if ($event.target.value < this.startDate.value) {
      this.endDate.setValue(this.startDate.value)
      this.emitDates(this.formatDate(this.startDate.value), this.formatDate(this.startDate.value))
      return
    }

    this.endDate.setValue($event.target.value)

    this.onEndDate.emit(this.formatDate($event.target.value))
  }

  emitDates(startDate: string, endDate: string): void {
    this.onStartDate.emit(startDate)
    this.onEndDate.emit(endDate)
  }
}
