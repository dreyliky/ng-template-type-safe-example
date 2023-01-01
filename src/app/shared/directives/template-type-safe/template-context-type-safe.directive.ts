import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'ng-template[ngxTemplateContextType]'
})
export class TemplateContextTypeSafeDirective<T> {
    @Input()
    public set ngxTemplateContextType(type: T) {};

    public static ngTemplateContextGuard<T>(
        directive: TemplateContextTypeSafeDirective<T>,
        context: unknown
    ): context is T {
        return true;
    }
}
