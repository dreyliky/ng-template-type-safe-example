import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlphabeticalListItemContext } from '@shared';

interface Item {
    readonly id: number;
    readonly name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public readonly contextType!: AlphabeticalListItemContext<Item>;

    public readonly data: Item[] = [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'Backend' },
        { id: 3, name: 'Business Analyst' },
        { id: 4, name: 'C++ Developer' },
        { id: 5, name: 'Devops' },
        { id: 6, name: 'Frontend' },
        { id: 7, name: 'Fullstack Developer' }
    ];

    public labelHandler = (item: Item) => item.name;
}
