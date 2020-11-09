// package: org.seariver.proto
// file: task.proto

var task_pb = require("./task_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TaskService = (function () {
  function TaskService() {}
  TaskService.serviceName = "org.seariver.proto.TaskService";
  return TaskService;
}());

TaskService.Create = {
  methodName: "Create",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: task_pb.CreateTaskRequest,
  responseType: task_pb.TaskProto
};

TaskService.Update = {
  methodName: "Update",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: task_pb.UpdateTaskRequest,
  responseType: task_pb.TaskProto
};

TaskService.Delete = {
  methodName: "Delete",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: task_pb.TaskIdRequest,
  responseType: task_pb.TaskProto
};

TaskService.Done = {
  methodName: "Done",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: task_pb.TaskIdRequest,
  responseType: task_pb.TaskProto
};

TaskService.FindAll = {
  methodName: "FindAll",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: task_pb.FindAllRequest,
  responseType: task_pb.TaskAllResponse
};

TaskService.FindById = {
  methodName: "FindById",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: task_pb.TaskIdRequest,
  responseType: task_pb.TaskProto
};

TaskService.DeleteMultipleTasks = {
  methodName: "DeleteMultipleTasks",
  service: TaskService,
  requestStream: false,
  responseStream: false,
  requestType: task_pb.DeleteMultipleTasksRequest,
  responseType: task_pb.DeleteMultipleTasksResponse
};

exports.TaskService = TaskService;

function TaskServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TaskServiceClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TaskServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.Update, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TaskServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.Delete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TaskServiceClient.prototype.done = function done(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.Done, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TaskServiceClient.prototype.findAll = function findAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.FindAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TaskServiceClient.prototype.findById = function findById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.FindById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TaskServiceClient.prototype.deleteMultipleTasks = function deleteMultipleTasks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TaskService.DeleteMultipleTasks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TaskServiceClient = TaskServiceClient;

