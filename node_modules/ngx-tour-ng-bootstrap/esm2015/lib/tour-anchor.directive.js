/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import withinviewport from 'withinviewport';
import { NgbTourService } from './ng-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
export class TourAnchorNgBootstrapPopoverDirective extends NgbPopover {
}
TourAnchorNgBootstrapPopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[tourAnchor]' },] }
];
export class TourAnchorNgBootstrapDirective {
    /**
     * @param {?} tourService
     * @param {?} tourStepTemplate
     * @param {?} element
     * @param {?} popoverDirective
     */
    constructor(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
        this.popoverDirective.toggle = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tourService.register(this.tourAnchor, this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    showTourStep(step) {
        this.isActive = true;
        this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        this.popoverDirective.placement = (/** @type {?} */ ((step.placement || 'top')
            .replace('before', 'left').replace('after', 'right')
            .replace('below', 'bottom').replace('above', 'top')));
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        this.popoverDirective.open({ step });
        if (!step.preventScrolling) {
            if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(false);
            }
            else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(true);
            }
        }
    }
    /**
     * @return {?}
     */
    hideTourStep() {
        this.isActive = false;
        this.popoverDirective.close();
    }
}
TourAnchorNgBootstrapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tourAnchor]',
            },] }
];
/** @nocollapse */
TourAnchorNgBootstrapDirective.ctorParameters = () => [
    { type: NgbTourService },
    { type: TourStepTemplateService },
    { type: ElementRef },
    { type: TourAnchorNgBootstrapPopoverDirective, decorators: [{ type: Host }] }
];
TourAnchorNgBootstrapDirective.propDecorators = {
    tourAnchor: [{ type: Input }],
    isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
};
if (false) {
    /** @type {?} */
    TourAnchorNgBootstrapDirective.prototype.tourAnchor;
    /** @type {?} */
    TourAnchorNgBootstrapDirective.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.tourStepTemplate;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.popoverDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3RvdXItYW5jaG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLGNBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdkUsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLFVBQVU7OztZQURwRSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOztBQU12QyxNQUFNLE9BQU8sOEJBQThCOzs7Ozs7O0lBTXpDLFlBQ1UsV0FBMkIsRUFDM0IsZ0JBQXlDLEVBQ3pDLE9BQW1CLEVBQ1gsZ0JBQXVEO1FBSC9ELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMzQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDWCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXVDO1FBR3ZFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNOzs7UUFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUEsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLElBQW9CO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBSSxNQUFNLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxtQkFBVyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO2FBQ25FLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDbkQsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFBLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7UUFFN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BFLENBQUMsbUJBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqRTtpQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBRTtnQkFDbkYsQ0FBQyxtQkFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQVZRLGNBQWM7WUFFZCx1QkFBdUI7WUFQWixVQUFVO1lBMEJRLHFDQUFxQyx1QkFBdEUsSUFBSTs7O3lCQVROLEtBQUs7dUJBRUwsV0FBVyxTQUFDLDZCQUE2Qjs7OztJQUYxQyxvREFBbUM7O0lBRW5DLGtEQUN5Qjs7Ozs7SUFHdkIscURBQW1DOzs7OztJQUNuQywwREFBaUQ7Ozs7O0lBQ2pELGlEQUEyQjs7Ozs7SUFDM0IsMERBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQb3BvdmVyLCBQbGFjZW1lbnQgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUb3VyQW5jaG9yRGlyZWN0aXZlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5pbXBvcnQgd2l0aGludmlld3BvcnQgZnJvbSAnd2l0aGludmlld3BvcnQnO1xuXG5pbXBvcnQgeyBOZ2JUb3VyU2VydmljZSB9IGZyb20gJy4vbmctYm9vdHN0cmFwLXRvdXIuc2VydmljZSc7XG5pbXBvcnQgeyBJTmdiU3RlcE9wdGlvbiB9IGZyb20gJy4vc3RlcC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJyB9KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOZ2JQb3BvdmVyIHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG91ckFuY2hvcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yTmdCb290c3RyYXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVG91ckFuY2hvckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b3VyQW5jaG9yOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b3VyYW5jaG9yLS1pcy1hY3RpdmUnKVxuICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b3VyU2VydmljZTogTmdiVG91clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIHBvcG92ZXJEaXJlY3RpdmU6IFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsXG4gICkge1xuXG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnRvZ2dsZSA9ICgpID0+IHsgfTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvciwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS51bnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvcik7XG4gIH1cblxuICBwdWJsaWMgc2hvd1RvdXJTdGVwKHN0ZXA6IElOZ2JTdGVwT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLm5nYlBvcG92ZXIgPSB0aGlzLnRvdXJTdGVwVGVtcGxhdGUudGVtcGxhdGU7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnBvcG92ZXJUaXRsZSA9IHN0ZXAudGl0bGU7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLmNvbnRhaW5lciA9ICAnYm9keSc7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnBsYWNlbWVudCA9IDxQbGFjZW1lbnQ+KHN0ZXAucGxhY2VtZW50IHx8ICd0b3AnKVxuICAgICAgLnJlcGxhY2UoJ2JlZm9yZScsICdsZWZ0JykucmVwbGFjZSgnYWZ0ZXInLCAncmlnaHQnKVxuICAgICAgLnJlcGxhY2UoJ2JlbG93JywgJ2JvdHRvbScpLnJlcGxhY2UoJ2Fib3ZlJywgJ3RvcCcpO1xuICAgIHN0ZXAucHJldkJ0blRpdGxlID0gc3RlcC5wcmV2QnRuVGl0bGUgfHwgJ1ByZXYnO1xuICAgIHN0ZXAubmV4dEJ0blRpdGxlID0gc3RlcC5uZXh0QnRuVGl0bGUgfHwgJ05leHQnO1xuICAgIHN0ZXAuZW5kQnRuVGl0bGUgPSBzdGVwLmVuZEJ0blRpdGxlIHx8ICdFbmQnO1xuXG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLm9wZW4oeyBzdGVwIH0pO1xuICAgIGlmICghc3RlcC5wcmV2ZW50U2Nyb2xsaW5nKSB7XG4gICAgICBpZiAoIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IHNpZGVzOiAnYm90dG9tJyB9KSkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKCF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2xlZnQgdG9wIHJpZ2h0JyB9KSkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZVRvdXJTdGVwKCk6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuY2xvc2UoKTtcbiAgfVxufVxuIl19