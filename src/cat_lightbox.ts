import { CONTAINER_CLASS_NAME } from './constants';
class CatLightbox {
  private modalContainerElement?: HTMLDivElement;
  private imageWrapperElement?: HTMLDivElement;
  private imageElement?: HTMLImageElement;

  private isShowing = false;

  constructor(private element: HTMLImageElement) {
    element.addEventListener('click', this.onOriginalElementClick.bind(this));
  }

  private show(): void {
    this.isShowing = true;

    this.modalContainerElement = document.createElement('div');
    this.configureContainerElement(this.modalContainerElement);

    this.imageWrapperElement = document.createElement('div');
    this.configureWrapperElement(this.imageWrapperElement);

    this.imageElement = document.createElement('img');
    this.configureImageElement(this.imageElement);

    this.imageWrapperElement.appendChild(this.imageElement);
    this.modalContainerElement.appendChild(this.imageWrapperElement);

    document.body.appendChild(this.modalContainerElement);
  }

  private onOriginalElementClick(): void {
    this.show();
  }

  private configureWrapperElement(imageWrapperElement: HTMLDivElement): void {
    const style = imageWrapperElement.style;
    style.display = 'flex';
  }

  private configureContainerElement(element: HTMLDivElement): void {
    element.className = CONTAINER_CLASS_NAME;

    const style = element.style;
    style.display = 'flex';
    style.alignItems = 'center';
    style.justifyContent = 'center';
    style.position = 'absolute';
    style.top = '0';
    style.left = '0';
    style.right = '0';
    style.bottom = '0';
    style.overflow = 'auto';
    style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }

  private configureImageElement(modalImageElement: HTMLImageElement): void {
    const style = modalImageElement.style;
    modalImageElement.src = this.element.src;
    style.display = 'flex';
    style.maxHeight = '100%';
    style.maxWidth = '100%';
  }
}

export default CatLightbox;
