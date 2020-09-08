/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import withinviewport from 'withinviewport';
import { NgbTourService } from './ng-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
var TourAnchorNgBootstrapPopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TourAnchorNgBootstrapPopoverDirective, _super);
    function TourAnchorNgBootstrapPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TourAnchorNgBootstrapPopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[tourAnchor]' },] }
    ];
    return TourAnchorNgBootstrapPopoverDirective;
}(NgbPopover));
export { TourAnchorNgBootstrapPopoverDirective };
var TourAnchorNgBootstrapDirective = /** @class */ (function () {
    function TourAnchorNgBootstrapDirective(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
        this.popoverDirective.toggle = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
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
        this.popoverDirective.open({ step: step });
        if (!step.preventScrolling) {
            if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(false);
            }
            else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(true);
            }
        }
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.popoverDirective.close();
    };
    TourAnchorNgBootstrapDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tourAnchor]',
                },] }
    ];
    /** @nocollapse */
    TourAnchorNgBootstrapDirective.ctorParameters = function () { return [
        { type: NgbTourService },
        { type: TourStepTemplateService },
        { type: ElementRef },
        { type: TourAnchorNgBootstrapPopoverDirective, decorators: [{ type: Host }] }
    ]; };
    TourAnchorNgBootstrapDirective.propDecorators = {
        tourAnchor: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
    };
    return TourAnchorNgBootstrapDirective;
}());
export { TourAnchorNgBootstrapDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3RvdXItYW5jaG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxjQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFO0lBQzJELGlFQUFVO0lBRHJFOztJQUN3RSxDQUFDOztnQkFEeEUsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTs7SUFDaUMsNENBQUM7Q0FBQSxBQUR6RSxDQUMyRCxVQUFVLEdBQUk7U0FBNUQscUNBQXFDO0FBRWxEO0lBU0Usd0NBQ1UsV0FBMkIsRUFDM0IsZ0JBQXlDLEVBQ3pDLE9BQW1CLEVBQ1gsZ0JBQXVEO1FBSC9ELGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMzQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDWCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXVDO1FBR3ZFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNOzs7UUFBRyxjQUFRLENBQUMsQ0FBQSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFTSxpREFBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFTSxvREFBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU0scURBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBb0I7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFJLE1BQU0sQ0FBQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLG1CQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7YUFDbkUsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQzthQUNuRCxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUEsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO2dCQUNwRSxDQUFDLG1CQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakU7aUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUU7Z0JBQ25GLENBQUMsbUJBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLHFEQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBVlEsY0FBYztnQkFFZCx1QkFBdUI7Z0JBUFosVUFBVTtnQkEwQlEscUNBQXFDLHVCQUF0RSxJQUFJOzs7NkJBVE4sS0FBSzsyQkFFTCxXQUFXLFNBQUMsNkJBQTZCOztJQStDNUMscUNBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWxEWSw4QkFBOEI7OztJQUN6QyxvREFBbUM7O0lBRW5DLGtEQUN5Qjs7Ozs7SUFHdkIscURBQW1DOzs7OztJQUNuQywwREFBaUQ7Ozs7O0lBQ2pELGlEQUEyQjs7Ozs7SUFDM0IsMERBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQb3BvdmVyLCBQbGFjZW1lbnQgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUb3VyQW5jaG9yRGlyZWN0aXZlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5pbXBvcnQgd2l0aGludmlld3BvcnQgZnJvbSAnd2l0aGludmlld3BvcnQnO1xuXG5pbXBvcnQgeyBOZ2JUb3VyU2VydmljZSB9IGZyb20gJy4vbmctYm9vdHN0cmFwLXRvdXIuc2VydmljZSc7XG5pbXBvcnQgeyBJTmdiU3RlcE9wdGlvbiB9IGZyb20gJy4vc3RlcC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJyB9KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOZ2JQb3BvdmVyIHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdG91ckFuY2hvcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yTmdCb290c3RyYXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVG91ckFuY2hvckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b3VyQW5jaG9yOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b3VyYW5jaG9yLS1pcy1hY3RpdmUnKVxuICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b3VyU2VydmljZTogTmdiVG91clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIHBvcG92ZXJEaXJlY3RpdmU6IFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsXG4gICkge1xuXG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnRvZ2dsZSA9ICgpID0+IHsgfTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvciwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS51bnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvcik7XG4gIH1cblxuICBwdWJsaWMgc2hvd1RvdXJTdGVwKHN0ZXA6IElOZ2JTdGVwT3B0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLm5nYlBvcG92ZXIgPSB0aGlzLnRvdXJTdGVwVGVtcGxhdGUudGVtcGxhdGU7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnBvcG92ZXJUaXRsZSA9IHN0ZXAudGl0bGU7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLmNvbnRhaW5lciA9ICAnYm9keSc7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnBsYWNlbWVudCA9IDxQbGFjZW1lbnQ+KHN0ZXAucGxhY2VtZW50IHx8ICd0b3AnKVxuICAgICAgLnJlcGxhY2UoJ2JlZm9yZScsICdsZWZ0JykucmVwbGFjZSgnYWZ0ZXInLCAncmlnaHQnKVxuICAgICAgLnJlcGxhY2UoJ2JlbG93JywgJ2JvdHRvbScpLnJlcGxhY2UoJ2Fib3ZlJywgJ3RvcCcpO1xuICAgIHN0ZXAucHJldkJ0blRpdGxlID0gc3RlcC5wcmV2QnRuVGl0bGUgfHwgJ1ByZXYnO1xuICAgIHN0ZXAubmV4dEJ0blRpdGxlID0gc3RlcC5uZXh0QnRuVGl0bGUgfHwgJ05leHQnO1xuICAgIHN0ZXAuZW5kQnRuVGl0bGUgPSBzdGVwLmVuZEJ0blRpdGxlIHx8ICdFbmQnO1xuXG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLm9wZW4oeyBzdGVwIH0pO1xuICAgIGlmICghc3RlcC5wcmV2ZW50U2Nyb2xsaW5nKSB7XG4gICAgICBpZiAoIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IHNpZGVzOiAnYm90dG9tJyB9KSkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKCF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2xlZnQgdG9wIHJpZ2h0JyB9KSkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZVRvdXJTdGVwKCk6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuY2xvc2UoKTtcbiAgfVxufVxuIl19