// package: org.seariver.proto
// file: task.proto

import * as jspb from "google-protobuf";

export class CreateTaskRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
  export type AsObject = {
    title: string,
  }
}

export class UpdateTaskRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
  static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
  export type AsObject = {
    id: number,
    title: string,
  }
}

export class TaskIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TaskIdRequest): TaskIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskIdRequest;
  static deserializeBinaryFromReader(message: TaskIdRequest, reader: jspb.BinaryReader): TaskIdRequest;
}

export namespace TaskIdRequest {
  export type AsObject = {
    id: number,
  }
}

export class FindAllRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindAllRequest): FindAllRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAllRequest;
  static deserializeBinaryFromReader(message: FindAllRequest, reader: jspb.BinaryReader): FindAllRequest;
}

export namespace FindAllRequest {
  export type AsObject = {
  }
}

export class TaskAllResponse extends jspb.Message {
  clearTaskList(): void;
  getTaskList(): Array<TaskProto>;
  setTaskList(value: Array<TaskProto>): void;
  addTask(value?: TaskProto, index?: number): TaskProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskAllResponse): TaskAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskAllResponse;
  static deserializeBinaryFromReader(message: TaskAllResponse, reader: jspb.BinaryReader): TaskAllResponse;
}

export namespace TaskAllResponse {
  export type AsObject = {
    taskList: Array<TaskProto.AsObject>,
  }
}

export class DeleteMultipleTasksRequest extends jspb.Message {
  clearTaskidList(): void;
  getTaskidList(): Array<TaskIdRequest>;
  setTaskidList(value: Array<TaskIdRequest>): void;
  addTaskid(value?: TaskIdRequest, index?: number): TaskIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMultipleTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMultipleTasksRequest): DeleteMultipleTasksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMultipleTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMultipleTasksRequest;
  static deserializeBinaryFromReader(message: DeleteMultipleTasksRequest, reader: jspb.BinaryReader): DeleteMultipleTasksRequest;
}

export namespace DeleteMultipleTasksRequest {
  export type AsObject = {
    taskidList: Array<TaskIdRequest.AsObject>,
  }
}

export class DeleteMultipleTasksResponse extends jspb.Message {
  clearTaskList(): void;
  getTaskList(): Array<TaskProto>;
  setTaskList(value: Array<TaskProto>): void;
  addTask(value?: TaskProto, index?: number): TaskProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMultipleTasksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMultipleTasksResponse): DeleteMultipleTasksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMultipleTasksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMultipleTasksResponse;
  static deserializeBinaryFromReader(message: DeleteMultipleTasksResponse, reader: jspb.BinaryReader): DeleteMultipleTasksResponse;
}

export namespace DeleteMultipleTasksResponse {
  export type AsObject = {
    taskList: Array<TaskProto.AsObject>,
  }
}

export class TaskProto extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getStatus(): TaskProto.StatusMap[keyof TaskProto.StatusMap];
  setStatus(value: TaskProto.StatusMap[keyof TaskProto.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskProto.AsObject;
  static toObject(includeInstance: boolean, msg: TaskProto): TaskProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskProto;
  static deserializeBinaryFromReader(message: TaskProto, reader: jspb.BinaryReader): TaskProto;
}

export namespace TaskProto {
  export type AsObject = {
    id: number,
    title: string,
    status: TaskProto.StatusMap[keyof TaskProto.StatusMap],
  }

  export interface StatusMap {
    UNKNOWN_STATUS: 0;
    TODO: 1;
    DONE: 2;
  }

  export const Status: StatusMap;
}

