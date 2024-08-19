import { afterNextRender, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ThreeJsService } from './three.service';
@Component({
  selector: 'app-three-d',
  standalone: true,
  templateUrl: './three-d.component.html',
  styleUrl: './three-d.component.scss',
  providers: [ThreeJsService],
})
export class ThreeDComponent {
  private threeJsService = inject(ThreeJsService);
  @ViewChild('canvasContainer') canvasContainer!: ElementRef;

  constructor() {
    afterNextRender(() => {
    this.threeJsService.init(this.canvasContainer.nativeElement);
    })
  }

}
