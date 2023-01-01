import { NgTemplateOutlet } from '@angular/common';
import { Directive, Injector, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ngxTemplateOutlet]'
})
export class TemplateOutletTypeSafeDirective<T extends Object> extends NgTemplateOutlet {
    @Input('ngxTemplateOutlet')
    public override ngTemplateOutlet: TemplateRef<T> | null = null;

    @Input('ngxTemplateOutletContext')
    public override ngTemplateOutletContext: T | null = null;

    @Input('ngxTemplateOutletInjector')
    public override ngTemplateOutletInjector: Injector | null = null;
}
