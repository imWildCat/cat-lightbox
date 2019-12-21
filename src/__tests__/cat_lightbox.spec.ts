import CatLightbox from '../cat_lightbox';
describe('lightbox', () => {

  let imageElement: HTMLImageElement;

  beforeEach(() => {
    imageElement = document.createElement('img');
    imageElement.className = 'sample-image';
    imageElement.src = 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg';
    document.body.appendChild(imageElement);
  });

  it('can be initialized', () => {
    const lightbox = new CatLightbox(imageElement);
    expect(lightbox).not.toBeNull();
  });

  it('the related image can be clicked', () => {
    const lightbox = new CatLightbox(imageElement);
    const mockShow = jest.spyOn<any, any>(lightbox, 'show');

    expect(mockShow).not.toBeCalled();
    imageElement.click();
    expect(mockShow).toHaveBeenCalledTimes(1);
    expect((lightbox as any).isShowing).toBeTruthy();
  })

});