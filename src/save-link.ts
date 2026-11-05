import {Directive, ElementRef, inject, input} from '@angular/core';
import {Log} from './components/log';

@Directive({
  selector: 'a[appSaveLink]',
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  },
  hostDirectives: [Log]
})
export class SaveLinkDirective {
  queryParam = input('myapp', {alias: 'appSafeLink'});
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('Safe link directive is activated');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href = address + `?from=${this.queryParam()}`
      return;
    } else {
      event?.preventDefault();
    }
  }
}
