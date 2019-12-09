import { SanitizedImagePipe } from './sanitized-image.pipe';

describe('SanitizedImagePipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizedImagePipe();
    expect(pipe).toBeTruthy();
  });
});
