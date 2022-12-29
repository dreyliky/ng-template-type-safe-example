import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AlphabeticalListComponent } from './alphabetical-list.component';
import { AlphabeticalListItemContentDirective } from './directives';

@NgModule({
    declarations: [
        AlphabeticalListComponent,
        AlphabeticalListItemContentDirective
    ],
    imports: [
        CommonModule,
        MatListModule
    ],
    exports: [
        AlphabeticalListComponent,
        AlphabeticalListItemContentDirective
    ]
})
export class AlphabeticalListModule {}
