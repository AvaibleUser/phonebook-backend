export class ContentMissingError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ContentMissing';
  }
}