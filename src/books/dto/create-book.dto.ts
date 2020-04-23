export class CreateBookDto {
  readonly blogpost: number;
  readonly title: string;
  readonly author: string;
  readonly published: {
    readonly publisher: string;
    readonly year: number;
  }
}