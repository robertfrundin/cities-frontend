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

goog.exportSymbol("proto.towns.UpdateCityRequest", null, global);
goog.exportSymbol("proto.towns.UpdateCityResponse", null, global);
goog.exportSymbol("proto.towns.UpdateCityResponseStatus", null, global);

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
proto.towns.UpdateCityRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.towns.UpdateCityRequest.oneofGroups_
  );
};
goog.inherits(proto.towns.UpdateCityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.towns.UpdateCityRequest.displayName = "proto.towns.UpdateCityRequest";
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.towns.UpdateCityRequest.oneofGroups_ = [[1], [2], [3], [4]];

/**
 * @enum {number}
 */
proto.towns.UpdateCityRequest.AuthTokenCheckerCase = {
  AUTH_TOKEN_CHECKER_NOT_SET: 0,
  AUTH_TOKEN: 1,
};

/**
 * @return {proto.towns.UpdateCityRequest.AuthTokenCheckerCase}
 */
proto.towns.UpdateCityRequest.prototype.getAuthTokenCheckerCase = function () {
  return /** @type {proto.towns.UpdateCityRequest.AuthTokenCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.UpdateCityRequest.oneofGroups_[0]
    )
  );
};

/**
 * @enum {number}
 */
proto.towns.UpdateCityRequest.RoomIdCheckerCase = {
  ROOM_ID_CHECKER_NOT_SET: 0,
  ROOM_ID: 2,
};

/**
 * @return {proto.towns.UpdateCityRequest.RoomIdCheckerCase}
 */
proto.towns.UpdateCityRequest.prototype.getRoomIdCheckerCase = function () {
  return /** @type {proto.towns.UpdateCityRequest.RoomIdCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.UpdateCityRequest.oneofGroups_[1]
    )
  );
};

/**
 * @enum {number}
 */
proto.towns.UpdateCityRequest.CityNameCheckerCase = {
  CITY_NAME_CHECKER_NOT_SET: 0,
  CITY_NAME: 3,
};

/**
 * @return {proto.towns.UpdateCityRequest.CityNameCheckerCase}
 */
proto.towns.UpdateCityRequest.prototype.getCityNameCheckerCase = function () {
  return /** @type {proto.towns.UpdateCityRequest.CityNameCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.UpdateCityRequest.oneofGroups_[2]
    )
  );
};

/**
 * @enum {number}
 */
proto.towns.UpdateCityRequest.TokenRoundCheckerCase = {
  TOKEN_ROUND_CHECKER_NOT_SET: 0,
  TOKEN_ROUND: 4,
};

/**
 * @return {proto.towns.UpdateCityRequest.TokenRoundCheckerCase}
 */
proto.towns.UpdateCityRequest.prototype.getTokenRoundCheckerCase = function () {
  return /** @type {proto.towns.UpdateCityRequest.TokenRoundCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.UpdateCityRequest.oneofGroups_[3]
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
  proto.towns.UpdateCityRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.towns.UpdateCityRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.towns.UpdateCityRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.towns.UpdateCityRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        authToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
        roomId: jspb.Message.getFieldWithDefault(msg, 2, ""),
        cityName: jspb.Message.getFieldWithDefault(msg, 3, ""),
        tokenRound: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.towns.UpdateCityRequest}
 */
proto.towns.UpdateCityRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.towns.UpdateCityRequest();
  return proto.towns.UpdateCityRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.towns.UpdateCityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.towns.UpdateCityRequest}
 */
proto.towns.UpdateCityRequest.deserializeBinaryFromReader = function (
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
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setRoomId(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setCityName(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setTokenRound(value);
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
proto.towns.UpdateCityRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.towns.UpdateCityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.towns.UpdateCityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.towns.UpdateCityRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(3, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(4, f);
  }
};

/**
 * optional string auth_token = 1;
 * @return {string}
 */
proto.towns.UpdateCityRequest.prototype.getAuthToken = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/** @param {string} value */
proto.towns.UpdateCityRequest.prototype.setAuthToken = function (value) {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.UpdateCityRequest.oneofGroups_[0],
    value
  );
};

proto.towns.UpdateCityRequest.prototype.clearAuthToken = function () {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.UpdateCityRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.UpdateCityRequest.prototype.hasAuthToken = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string room_id = 2;
 * @return {string}
 */
proto.towns.UpdateCityRequest.prototype.getRoomId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/** @param {string} value */
proto.towns.UpdateCityRequest.prototype.setRoomId = function (value) {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.UpdateCityRequest.oneofGroups_[1],
    value
  );
};

proto.towns.UpdateCityRequest.prototype.clearRoomId = function () {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.UpdateCityRequest.oneofGroups_[1],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.UpdateCityRequest.prototype.hasRoomId = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string city_name = 3;
 * @return {string}
 */
proto.towns.UpdateCityRequest.prototype.getCityName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/** @param {string} value */
proto.towns.UpdateCityRequest.prototype.setCityName = function (value) {
  jspb.Message.setOneofField(
    this,
    3,
    proto.towns.UpdateCityRequest.oneofGroups_[2],
    value
  );
};

proto.towns.UpdateCityRequest.prototype.clearCityName = function () {
  jspb.Message.setOneofField(
    this,
    3,
    proto.towns.UpdateCityRequest.oneofGroups_[2],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.UpdateCityRequest.prototype.hasCityName = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional int32 token_round = 4;
 * @return {number}
 */
proto.towns.UpdateCityRequest.prototype.getTokenRound = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/** @param {number} value */
proto.towns.UpdateCityRequest.prototype.setTokenRound = function (value) {
  jspb.Message.setOneofField(
    this,
    4,
    proto.towns.UpdateCityRequest.oneofGroups_[3],
    value
  );
};

proto.towns.UpdateCityRequest.prototype.clearTokenRound = function () {
  jspb.Message.setOneofField(
    this,
    4,
    proto.towns.UpdateCityRequest.oneofGroups_[3],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.UpdateCityRequest.prototype.hasTokenRound = function () {
  return jspb.Message.getField(this, 4) != null;
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
proto.towns.UpdateCityResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.towns.UpdateCityResponse.oneofGroups_
  );
};
goog.inherits(proto.towns.UpdateCityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.towns.UpdateCityResponse.displayName = "proto.towns.UpdateCityResponse";
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.towns.UpdateCityResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.towns.UpdateCityResponse.StatusCheckerCase = {
  STATUS_CHECKER_NOT_SET: 0,
  STATUS: 1,
};

/**
 * @return {proto.towns.UpdateCityResponse.StatusCheckerCase}
 */
proto.towns.UpdateCityResponse.prototype.getStatusCheckerCase = function () {
  return /** @type {proto.towns.UpdateCityResponse.StatusCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.UpdateCityResponse.oneofGroups_[0]
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
  proto.towns.UpdateCityResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.towns.UpdateCityResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.towns.UpdateCityResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.towns.UpdateCityResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        status: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.towns.UpdateCityResponse}
 */
proto.towns.UpdateCityResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.towns.UpdateCityResponse();
  return proto.towns.UpdateCityResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.towns.UpdateCityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.towns.UpdateCityResponse}
 */
proto.towns.UpdateCityResponse.deserializeBinaryFromReader = function (
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
        var value = /** @type {!proto.towns.UpdateCityResponseStatus} */ (
          reader.readEnum()
        );
        msg.setStatus(value);
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
proto.towns.UpdateCityResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.towns.UpdateCityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.towns.UpdateCityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.towns.UpdateCityResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {!proto.towns.UpdateCityResponseStatus} */ (
    jspb.Message.getField(message, 1)
  );
  if (f != null) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional UpdateCityResponseStatus status = 1;
 * @return {!proto.towns.UpdateCityResponseStatus}
 */
proto.towns.UpdateCityResponse.prototype.getStatus = function () {
  return /** @type {!proto.towns.UpdateCityResponseStatus} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/** @param {!proto.towns.UpdateCityResponseStatus} value */
proto.towns.UpdateCityResponse.prototype.setStatus = function (value) {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.UpdateCityResponse.oneofGroups_[0],
    value
  );
};

proto.towns.UpdateCityResponse.prototype.clearStatus = function () {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.UpdateCityResponse.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.UpdateCityResponse.prototype.hasStatus = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * @enum {number}
 */
proto.towns.UpdateCityResponseStatus = {
  SUCCESS: 0,
  INVALID_CITY: 1,
  DUPLICATE_CITY: 2,
};

goog.object.extend(exports, proto.towns);
