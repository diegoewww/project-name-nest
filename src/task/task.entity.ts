
export enum StatusTask {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export class Task {
  id: string
  title: string
  description: string
  status: StatusTask
}