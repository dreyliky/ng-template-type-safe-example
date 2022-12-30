import { NgModule } from '@angular/core';
import { TemplateContextTypeSafeDirective } from './template-context-type-safe.directive';

@NgModule({
    declarations: [
        TemplateContextTypeSafeDirective
    ],
    exports: [
        TemplateContextTypeSafeDirective
    ]
})
export class TemplateContextTypeSafeModule {}
