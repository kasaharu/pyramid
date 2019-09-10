export interface CurrentUser {
  uid: string;
}

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
  // NOTE: 作成時は userId はないが保存時に付与される
  userId?: string;
}
