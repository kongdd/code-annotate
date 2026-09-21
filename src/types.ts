export type AnnotationStatus = "open" | "resolved";

export interface Reply {
  body: string;
}

export interface Annotation {
  id: string;
  file: string;
  startLine: number;
  endLine: number;
  status: AnnotationStatus;
  thread: Reply[];
}

export interface AnnotationsFile {
  version: 1;
  annotations: Annotation[];
}

export function emptyFile(): AnnotationsFile {
  return { version: 1, annotations: [] };
}
