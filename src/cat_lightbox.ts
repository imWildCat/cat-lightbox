import { CONTAINER_CLASS_NAME, DEFAULT_CLOSE_SYMBOL } from './constants';
export default class CatLightbox {
  private modalContainerElement!: HTMLDivElement | null;
  private imageWrapperElement!: HTMLDivElement | null;
  private imageElement!: HTMLImageElement | null;
  private closeButton!: HTMLDivElement | null;

  private isShowing = false;

  private closeSymbol = DEFAULT_CLOSE_SYMBOL;

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

    this.imageWrapperElement.appendChild(this.closeButton);
    this.imageWrapperElement.appendChild(this.imageElement);
    this.modalContainerElement.appendChild(this.imageWrapperElement);

    document.body.appendChild(this.modalContainerElement);
  }

  private dismiss(): void {
    this.modalContainerElement?.parentElement?.removeChild(this.modalContainerElement);

    // Clean up references
    this.modalContainerElement = null;
    this.imageWrapperElement = null;
    this.imageElement = null;
    this.closeButton = null;

    this.isShowing = false;
  }

  private onOriginalElementClick(): void {
    this.show();
  }

  private configureWrapperElement(): void {
    const style = this.imageWrapperElement?.style;
    if (style) {
      style.display = 'flex';
      style.position = 'relative';
    }
  }

  private configureContainerElement(): void {
    if (!this.modalContainerElement) {
      return;
    }
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
    style.opacity = '0';
    style.transition = 'opacity 0.25s ease';

    setTimeout(() => {
      window.requestAnimationFrame(() => {
        style.opacity = '1';
      });
    });
  }

  private configureImageElement(): void {
    if (!this.imageElement) {
      return;
    }
    const style = this.imageElement.style;
    this.imageElement.src = this.element.src;
    style.display = 'flex';
    style.maxHeight = '100%';
    style.maxWidth = '100%';
  }

  private configureCloseButton(): void {
    const closeButton = this.closeButton;
    if (!closeButton) {
      return;
    }
    closeButton.addEventListener('click', this.dismiss.bind(this));
    closeButton.innerHTML = this.closeSymbol;

    const style = closeButton.style;

    style.position = 'absolute';
    style.display = 'flex';
    style.justifyContent = 'center';
    style.alignItems = 'center';

    style.padding = '2px';
    style.top = '-25px';
    style.right = '-25px';
    style.width = '23px';
    style.height = '23px';
    style.fontSize = '20px';

    style.color = 'white';
    style.backgroundColor = 'black';
    style.borderRadius = '20px';
    style.cursor = 'pointer';
  }
}
