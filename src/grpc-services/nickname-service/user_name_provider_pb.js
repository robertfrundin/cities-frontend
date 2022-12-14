/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

goog.exportSymbol("proto.towns.GetNameRequest", null, global);
goog.exportSymbol("proto.towns.GetNameResponse", null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.towns.GetNameRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.towns.GetNameRequest.oneofGroups_
  );
};
goog.inherits(proto.towns.GetNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.towns.GetNameRequest.displayName = "proto.towns.GetNameRequest";
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.towns.GetNameRequest.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.towns.GetNameRequest.AuthTokenCheckerCase = {
  AUTH_TOKEN_CHECKER_NOT_SET: 0,
  AUTH_TOKEN: 1,
};

/**
 * @return {proto.towns.GetNameRequest.AuthTokenCheckerCase}
 */
proto.towns.GetNameRequest.prototype.getAuthTokenCheckerCase = function () {
  return /** @type {proto.towns.GetNameRequest.AuthTokenCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.GetNameRequest.oneofGroups_[0]
    )
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.towns.GetNameRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.towns.GetNameRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.towns.GetNameRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.towns.GetNameRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        authToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.towns.GetNameRequest}
 */
proto.towns.GetNameRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.towns.GetNameRequest();
  return proto.towns.GetNameRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.towns.GetNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.towns.GetNameRequest}
 */
proto.towns.GetNameRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAuthToken(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.towns.GetNameRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.towns.GetNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.towns.GetNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.towns.GetNameRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
};

/**
 * optional string auth_token = 1;
 * @return {string}
 */
proto.towns.GetNameRequest.prototype.getAuthToken = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/** @param {string} value */
proto.towns.GetNameRequest.prototype.setAuthToken = function (value) {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetNameRequest.oneofGroups_[0],
    value
  );
};

proto.towns.GetNameRequest.prototype.clearAuthToken = function () {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetNameRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetNameRequest.prototype.hasAuthToken = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.towns.GetNameResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.towns.GetNameResponse.oneofGroups_
  );
};
goog.inherits(proto.towns.GetNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.towns.GetNameResponse.displayName = "proto.towns.GetNameResponse";
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.towns.GetNameResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.towns.GetNameResponse.UserNameCheckerCase = {
  USER_NAME_CHECKER_NOT_SET: 0,
  USER_NAME: 1,
};

/**
 * @return {proto.towns.GetNameResponse.UserNameCheckerCase}
 */
proto.towns.GetNameResponse.prototype.getUserNameCheckerCase = function () {
  return /** @type {proto.towns.GetNameResponse.UserNameCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.GetNameResponse.oneofGroups_[0]
    )
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.towns.GetNameResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.towns.GetNameResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.towns.GetNameResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.towns.GetNameResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.towns.GetNameResponse}
 */
proto.towns.GetNameResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.towns.GetNameResponse();
  return proto.towns.GetNameResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.towns.GetNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.towns.GetNameResponse}
 */
proto.towns.GetNameResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setUserName(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.towns.GetNameResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.towns.GetNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.towns.GetNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.towns.GetNameResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
};

/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.towns.GetNameResponse.prototype.getUserName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/** @param {string} value */
proto.towns.GetNameResponse.prototype.setUserName = function (value) {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetNameResponse.oneofGroups_[0],
    value
  );
};

proto.towns.GetNameResponse.prototype.clearUserName = function () {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetNameResponse.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetNameResponse.prototype.hasUserName = function () {
  return jspb.Message.getField(this, 1) != null;
};

goog.object.extend(exports, proto.towns);
