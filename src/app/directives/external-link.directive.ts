import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExternalLink]',
})
export class ExternalLinkDirective {
  @Input() href = '';

  constructor(
    private _elRef: ElementRef, // Elemento que llama a la directiva
    private _renderer: Renderer2 // Servicio para renderear el elemento
  ) {}

  ngOnInit() {
    const re =
      /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/; // regex que evalua si tiene http seguido de una url
    const result = re.exec(this.href);
    if (result) { //Si tiene el http agrega el attr 'target' con el valor '_blank'
      this._renderer.setAttribute(
        this._elRef.nativeElement,
        'target',
        '_blank'
      );
    }
  }
}
