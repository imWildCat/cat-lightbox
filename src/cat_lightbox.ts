import { CONTAINER_CLASS_NAME } from './constants';
export default class CatLightbox {
  private modalContainerElement?: HTMLDivElement;
  private modalImageElement?: HTMLImageElement;

  private isShowing = false;

  constructor(private element: HTMLImageElement) {
    element.addEventListener('click', this.onOriginalElementClick.bind(this));
  }

  private show(): void {
    this.isShowing = true;

    this.modalContainerElement = document.createElement('div');
    this.configureContainerElement(this.modalContainerElement);
    this.modalImageElement = document.createElement('img');
    this.configureImageElement(this.modalImageElement);

    this.modalContainerElement.appendChild(this.modalImageElement);

    document.body.appendChild(this.modalContainerElement);
  }

  private onOriginalElementClick(): void {
    this.show();
  }

  private configureContainerElement(element: HTMLDivElement): void {
    element.className = CONTAINER_CLASS_NAME;

    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '0';
    element.style.right = '0';
    element.style.bottom = '0';
    element.style.overflow = 'auto';
  }

  private configureImageElement(modalImageElement: HTMLImageElement): void {
    modalImageElement.src = this.element.src;
    modalImageElement.style.maxHeight = '100%';
    modalImageElement.style.maxWidth = '100%';
  }
}