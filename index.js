import { format, parseISO, addDays } from 'date-fns';
import tippy from 'tippy.js';
import { createPopper } from '@popperjs/core';

class FluentDateRangePicker {
  constructor(element, options = {}) {
    this.element = element;
    this.startDate = options.startDate || new Date();
    this.endDate = options.endDate || addDays(new Date(), 7);
    this.format = options.format || 'yyyy-MM-dd';
    this.init();
  }

  init() {
    this.element.innerHTML = `
      <input type="text" class="start-date" placeholder="Start Date" value="${format(this.startDate, this.format)}"/>
      <input type="text" class="end-date" placeholder="End Date" value="${format(this.endDate, this.format)}"/>
    `;

    tippy('.start-date', {
      content: 'Select start date',
    });

    tippy('.end-date', {
      content: 'Select end date',
    });

    // Initialize Popper for positioning if needed
    const startDateInput = this.element.querySelector('.start-date');
    const endDateInput = this.element.querySelector('.end-date');
    createPopper(startDateInput, endDateInput, {
      placement: 'bottom',
    });
  }

  // Additional methods can be defined here
}

export default FluentDateRangePicker;
