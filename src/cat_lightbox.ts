import { CONTAINER_CLASS_NAME } from './constants';
class CatLightbox {
  private modalContainerElement!: HTMLDivElement;
  private imageWrapperElement!: HTMLDivElement;
  private imageElement!: HTMLImageElement;
  private closeButton!: HTMLDivElement;

  private isShowing = false;

  private closeSymbol = '&times';

  constructor(private element: HTMLImageElement) {
    element.addEventListener('click', this.onOriginalElementClick.bind(this));
  }

  private show(): void {
    if (this.isShowing) {
      return;
    }

    this.isShowing = true;

    this.modalContainerElement = document.createElement('div');
    this.configureContainerElement();

    this.imageWrapperElement = document.createElement('div');
    this.configureWrapperElement();

    this.closeButton = document.createElement('div');
    this.configureCloseButton();

    this.imageElement = document.createElement('img');
    this.configureImageElement();

    this.imageWrapperElement.appendChild(this.imageElement);
    this.modalContainerElement.appendChild(this.imageWrapperElement);

    document.body.appendChild(this.modalContainerElement);
  }

  private onOriginalElementClick(): void {
    this.show();
  }

  private configureWrapperElement(): void {
    const style = this.imageWrapperElement.style;
    style.display = 'flex';
  }

  private configureContainerElement(): void {
    this.modalContainerElement.className = CONTAINER_CLASS_NAME;

    const style = this.modalContainerElement.style;
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

  private configureImageElement(): void {
    const style = this.imageElement.style;
    this.imageElement.src = this.element.src;
    style.display = 'flex';
    style.maxHeight = '100%';
    style.maxWidth = '100%';
  }

  private configureCloseButton(): void {

  }
}

export default CatLightbox;
