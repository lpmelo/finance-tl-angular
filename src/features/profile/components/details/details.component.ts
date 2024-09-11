import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input({alias:"title"}) title!:string
  @Input({alias:"subtitle"}) subtitle!:string
}
