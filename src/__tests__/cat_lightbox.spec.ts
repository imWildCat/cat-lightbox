import CatLightbox from '../cat_lightbox';
import { CONTAINER_CLASS_NAME } from '../constants';

describe('lightbox', () => {
  let imageElement: HTMLImageElement;

  beforeEach(() => {
    imageElement = document.createElement('img');
    imageElement.className = 'sample-image';
    imageElement.src = 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg';
    document.body.appendChild(imageElement);
  });

  afterEach(() => {
    // Reset body
    document.body.innerHTML = '';
  });

  it('can be initialized', () => {
    const lightbox = new CatLightbox(imageElement);
    expect(lightbox).not.toBeNull();
  });

  it('can be clicked', () => {
    const lightbox = new CatLightbox(imageElement);
    const mockShow = jest.spyOn<any, any>(lightbox, 'show');

    expect(mockShow).not.toBeCalled();
    imageElement.click();
    expect(mockShow).toHaveBeenCalledTimes(1);
    expect((lightbox as any).isShowing).toBeTruthy();
  });

  it('should show the modal after being clicked', () => {
    new CatLightbox(imageElement);

    const containerElementNull = document.querySelector(`.${CONTAINER_CLASS_NAME}`);
    expect(containerElementNull).toBeNull();

    imageElement.click();

    const containerElement = document.querySelector(`.${CONTAINER_CLASS_NAME}`);
    expect(containerElement).not.toBeNull();
  });
});
