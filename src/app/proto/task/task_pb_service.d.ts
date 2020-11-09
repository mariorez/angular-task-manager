// package: org.seariver.proto
// file: task.proto

import * as task_pb from "./task_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TaskServiceCreate = {
  readonly methodName: string;
  readonly service: typeof TaskService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof task_pb.CreateTaskRequest;
  readonly responseType: typeof task_pb.TaskProto;
};

type TaskServiceUpdate = {
  readonly methodName: string;
  readonly service: typeof TaskService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof task_pb.UpdateTaskRequest;
  readonly responseType: typeof task_pb.TaskProto;
};

type TaskServiceDelete = {
  readonly methodName: string;
  readonly service: typeof TaskService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof task_pb.TaskIdRequest;
  readonly responseType: typeof task_pb.TaskProto;
};

type TaskServiceDone = {
  readonly methodName: string;
  readonly service: typeof TaskService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof task_pb.TaskIdRequest;
  readonly responseType: typeof task_pb.TaskProto;
};

type TaskServiceFindAll = {
  readonly methodName: string;
  readonly service: typeof TaskService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof task_pb.FindAllRequest;
  readonly responseType: typeof task_pb.TaskAllResponse;
};

type TaskServiceFindById = {
  readonly methodName: string;
  readonly service: typeof TaskService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof task_pb.TaskIdRequest;
  readonly responseType: typeof task_pb.TaskProto;
};

type TaskServiceDeleteMultipleTasks = {
  readonly methodName: string;
  readonly service: typeof TaskService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof task_pb.DeleteMultipleTasksRequest;
  readonly responseType: typeof task_pb.DeleteMultipleTasksResponse;
};

export class TaskService {
  static readonly serviceName: string;
  static readonly Create: TaskServiceCreate;
  static readonly Update: TaskServiceUpdate;
  static readonly Delete: TaskServiceDelete;
  static readonly Done: TaskServiceDone;
  static readonly FindAll: TaskServiceFindAll;
  static readonly FindById: TaskServiceFindById;
  static readonly DeleteMultipleTasks: TaskServiceDeleteMultipleTasks;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TaskServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  create(
    requestMessage: task_pb.CreateTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  create(
    requestMessage: task_pb.CreateTaskRequest,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  update(
    requestMessage: task_pb.UpdateTaskRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  update(
    requestMessage: task_pb.UpdateTaskRequest,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: task_pb.TaskIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: task_pb.TaskIdRequest,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  done(
    requestMessage: task_pb.TaskIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  done(
    requestMessage: task_pb.TaskIdRequest,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  findAll(
    requestMessage: task_pb.FindAllRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskAllResponse|null) => void
  ): UnaryResponse;
  findAll(
    requestMessage: task_pb.FindAllRequest,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskAllResponse|null) => void
  ): UnaryResponse;
  findById(
    requestMessage: task_pb.TaskIdRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  findById(
    requestMessage: task_pb.TaskIdRequest,
    callback: (error: ServiceError|null, responseMessage: task_pb.TaskProto|null) => void
  ): UnaryResponse;
  deleteMultipleTasks(
    requestMessage: task_pb.DeleteMultipleTasksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: task_pb.DeleteMultipleTasksResponse|null) => void
  ): UnaryResponse;
  deleteMultipleTasks(
    requestMessage: task_pb.DeleteMultipleTasksRequest,
    callback: (error: ServiceError|null, responseMessage: task_pb.DeleteMultipleTasksResponse|null) => void
  ): UnaryResponse;
}

