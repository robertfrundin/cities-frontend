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

goog.exportSymbol("proto.towns.GameStage", null, global);
goog.exportSymbol("proto.towns.GetGameInfoRequest", null, global);
goog.exportSymbol("proto.towns.GetGameInfoResponse", null, global);
goog.exportSymbol("proto.towns.PlayerInfo", null, global);

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
proto.towns.GetGameInfoRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.towns.GetGameInfoRequest.oneofGroups_
  );
};
goog.inherits(proto.towns.GetGameInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.towns.GetGameInfoRequest.displayName = "proto.towns.GetGameInfoRequest";
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.towns.GetGameInfoRequest.oneofGroups_ = [[1], [2]];

/**
 * @enum {number}
 */
proto.towns.GetGameInfoRequest.AuthTokenCheckerCase = {
  AUTH_TOKEN_CHECKER_NOT_SET: 0,
  AUTH_TOKEN: 1,
};

/**
 * @return {proto.towns.GetGameInfoRequest.AuthTokenCheckerCase}
 */
proto.towns.GetGameInfoRequest.prototype.getAuthTokenCheckerCase = function () {
  return /** @type {proto.towns.GetGameInfoRequest.AuthTokenCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.GetGameInfoRequest.oneofGroups_[0]
    )
  );
};

/**
 * @enum {number}
 */
proto.towns.GetGameInfoRequest.RoomIdCheckerCase = {
  ROOM_ID_CHECKER_NOT_SET: 0,
  ROOM_ID: 2,
};

/**
 * @return {proto.towns.GetGameInfoRequest.RoomIdCheckerCase}
 */
proto.towns.GetGameInfoRequest.prototype.getRoomIdCheckerCase = function () {
  return /** @type {proto.towns.GetGameInfoRequest.RoomIdCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.GetGameInfoRequest.oneofGroups_[1]
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
  proto.towns.GetGameInfoRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.towns.GetGameInfoRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.towns.GetGameInfoRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.towns.GetGameInfoRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        authToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
        roomId: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.towns.GetGameInfoRequest}
 */
proto.towns.GetGameInfoRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.towns.GetGameInfoRequest();
  return proto.towns.GetGameInfoRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.towns.GetGameInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.towns.GetGameInfoRequest}
 */
proto.towns.GetGameInfoRequest.deserializeBinaryFromReader = function (
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
proto.towns.GetGameInfoRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.towns.GetGameInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.towns.GetGameInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.towns.GetGameInfoRequest.serializeBinaryToWriter = function (
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
};

/**
 * optional string auth_token = 1;
 * @return {string}
 */
proto.towns.GetGameInfoRequest.prototype.getAuthToken = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/** @param {string} value */
proto.towns.GetGameInfoRequest.prototype.setAuthToken = function (value) {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetGameInfoRequest.oneofGroups_[0],
    value
  );
};

proto.towns.GetGameInfoRequest.prototype.clearAuthToken = function () {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetGameInfoRequest.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetGameInfoRequest.prototype.hasAuthToken = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string room_id = 2;
 * @return {string}
 */
proto.towns.GetGameInfoRequest.prototype.getRoomId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/** @param {string} value */
proto.towns.GetGameInfoRequest.prototype.setRoomId = function (value) {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.GetGameInfoRequest.oneofGroups_[1],
    value
  );
};

proto.towns.GetGameInfoRequest.prototype.clearRoomId = function () {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.GetGameInfoRequest.oneofGroups_[1],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetGameInfoRequest.prototype.hasRoomId = function () {
  return jspb.Message.getField(this, 2) != null;
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
proto.towns.PlayerInfo = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.towns.PlayerInfo.oneofGroups_
  );
};
goog.inherits(proto.towns.PlayerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.towns.PlayerInfo.displayName = "proto.towns.PlayerInfo";
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.towns.PlayerInfo.oneofGroups_ = [[1], [2], [3]];

/**
 * @enum {number}
 */
proto.towns.PlayerInfo.UserScoreCheckerCase = {
  USER_SCORE_CHECKER_NOT_SET: 0,
  USER_SCORE: 1,
};

/**
 * @return {proto.towns.PlayerInfo.UserScoreCheckerCase}
 */
proto.towns.PlayerInfo.prototype.getUserScoreCheckerCase = function () {
  return /** @type {proto.towns.PlayerInfo.UserScoreCheckerCase} */ (
    jspb.Message.computeOneofCase(this, proto.towns.PlayerInfo.oneofGroups_[0])
  );
};

/**
 * @enum {number}
 */
proto.towns.PlayerInfo.UserIdCheckerCase = {
  USER_ID_CHECKER_NOT_SET: 0,
  USER_ID: 2,
};

/**
 * @return {proto.towns.PlayerInfo.UserIdCheckerCase}
 */
proto.towns.PlayerInfo.prototype.getUserIdCheckerCase = function () {
  return /** @type {proto.towns.PlayerInfo.UserIdCheckerCase} */ (
    jspb.Message.computeOneofCase(this, proto.towns.PlayerInfo.oneofGroups_[1])
  );
};

/**
 * @enum {number}
 */
proto.towns.PlayerInfo.UserNameCheckerCase = {
  USER_NAME_CHECKER_NOT_SET: 0,
  USER_NAME: 3,
};

/**
 * @return {proto.towns.PlayerInfo.UserNameCheckerCase}
 */
proto.towns.PlayerInfo.prototype.getUserNameCheckerCase = function () {
  return /** @type {proto.towns.PlayerInfo.UserNameCheckerCase} */ (
    jspb.Message.computeOneofCase(this, proto.towns.PlayerInfo.oneofGroups_[2])
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
  proto.towns.PlayerInfo.prototype.toObject = function (opt_includeInstance) {
    return proto.towns.PlayerInfo.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.towns.PlayerInfo} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.towns.PlayerInfo.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        userScore: jspb.Message.getFieldWithDefault(msg, 1, 0),
        userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
        userName: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.towns.PlayerInfo}
 */
proto.towns.PlayerInfo.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.towns.PlayerInfo();
  return proto.towns.PlayerInfo.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.towns.PlayerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.towns.PlayerInfo}
 */
proto.towns.PlayerInfo.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setUserScore(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setUserId(value);
        break;
      case 3:
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
proto.towns.PlayerInfo.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.towns.PlayerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.towns.PlayerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.towns.PlayerInfo.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(3, f);
  }
};

/**
 * optional int32 user_score = 1;
 * @return {number}
 */
proto.towns.PlayerInfo.prototype.getUserScore = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.towns.PlayerInfo.prototype.setUserScore = function (value) {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.PlayerInfo.oneofGroups_[0],
    value
  );
};

proto.towns.PlayerInfo.prototype.clearUserScore = function () {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.PlayerInfo.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.PlayerInfo.prototype.hasUserScore = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.towns.PlayerInfo.prototype.getUserId = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/** @param {string} value */
proto.towns.PlayerInfo.prototype.setUserId = function (value) {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.PlayerInfo.oneofGroups_[1],
    value
  );
};

proto.towns.PlayerInfo.prototype.clearUserId = function () {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.PlayerInfo.oneofGroups_[1],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.PlayerInfo.prototype.hasUserId = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string user_name = 3;
 * @return {string}
 */
proto.towns.PlayerInfo.prototype.getUserName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/** @param {string} value */
proto.towns.PlayerInfo.prototype.setUserName = function (value) {
  jspb.Message.setOneofField(
    this,
    3,
    proto.towns.PlayerInfo.oneofGroups_[2],
    value
  );
};

proto.towns.PlayerInfo.prototype.clearUserName = function () {
  jspb.Message.setOneofField(
    this,
    3,
    proto.towns.PlayerInfo.oneofGroups_[2],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.PlayerInfo.prototype.hasUserName = function () {
  return jspb.Message.getField(this, 3) != null;
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
proto.towns.GetGameInfoResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.towns.GetGameInfoResponse.repeatedFields_,
    proto.towns.GetGameInfoResponse.oneofGroups_
  );
};
goog.inherits(proto.towns.GetGameInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.towns.GetGameInfoResponse.displayName =
    "proto.towns.GetGameInfoResponse";
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.towns.GetGameInfoResponse.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.towns.GetGameInfoResponse.oneofGroups_ = [[1], [2], [3], [4], [6]];

/**
 * @enum {number}
 */
proto.towns.GetGameInfoResponse.GameStageCheckerCase = {
  GAME_STAGE_CHECKER_NOT_SET: 0,
  GAME_STAGE: 1,
};

/**
 * @return {proto.towns.GetGameInfoResponse.GameStageCheckerCase}
 */
proto.towns.GetGameInfoResponse.prototype.getGameStageCheckerCase =
  function () {
    return /** @type {proto.towns.GetGameInfoResponse.GameStageCheckerCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.towns.GetGameInfoResponse.oneofGroups_[0]
      )
    );
  };

/**
 * @enum {number}
 */
proto.towns.GetGameInfoResponse.CurrentCityCheckerCase = {
  CURRENT_CITY_CHECKER_NOT_SET: 0,
  CURRENT_CITY: 2,
};

/**
 * @return {proto.towns.GetGameInfoResponse.CurrentCityCheckerCase}
 */
proto.towns.GetGameInfoResponse.prototype.getCurrentCityCheckerCase =
  function () {
    return /** @type {proto.towns.GetGameInfoResponse.CurrentCityCheckerCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.towns.GetGameInfoResponse.oneofGroups_[1]
      )
    );
  };

/**
 * @enum {number}
 */
proto.towns.GetGameInfoResponse.RequiredLetterCheckerCase = {
  REQUIRED_LETTER_CHECKER_NOT_SET: 0,
  REQUIRED_LETTER: 3,
};

/**
 * @return {proto.towns.GetGameInfoResponse.RequiredLetterCheckerCase}
 */
proto.towns.GetGameInfoResponse.prototype.getRequiredLetterCheckerCase =
  function () {
    return /** @type {proto.towns.GetGameInfoResponse.RequiredLetterCheckerCase} */ (
      jspb.Message.computeOneofCase(
        this,
        proto.towns.GetGameInfoResponse.oneofGroups_[2]
      )
    );
  };

/**
 * @enum {number}
 */
proto.towns.GetGameInfoResponse.RoundCheckerCase = {
  ROUND_CHECKER_NOT_SET: 0,
  ROUND: 4,
};

/**
 * @return {proto.towns.GetGameInfoResponse.RoundCheckerCase}
 */
proto.towns.GetGameInfoResponse.prototype.getRoundCheckerCase = function () {
  return /** @type {proto.towns.GetGameInfoResponse.RoundCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.GetGameInfoResponse.oneofGroups_[3]
    )
  );
};

/**
 * @enum {number}
 */
proto.towns.GetGameInfoResponse.DurationCheckerCase = {
  DURATION_CHECKER_NOT_SET: 0,
  DURATION: 6,
};

/**
 * @return {proto.towns.GetGameInfoResponse.DurationCheckerCase}
 */
proto.towns.GetGameInfoResponse.prototype.getDurationCheckerCase = function () {
  return /** @type {proto.towns.GetGameInfoResponse.DurationCheckerCase} */ (
    jspb.Message.computeOneofCase(
      this,
      proto.towns.GetGameInfoResponse.oneofGroups_[4]
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
  proto.towns.GetGameInfoResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.towns.GetGameInfoResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.towns.GetGameInfoResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.towns.GetGameInfoResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        gameStage: jspb.Message.getFieldWithDefault(msg, 1, 0),
        currentCity: jspb.Message.getFieldWithDefault(msg, 2, ""),
        requiredLetter: jspb.Message.getFieldWithDefault(msg, 3, ""),
        round: jspb.Message.getFieldWithDefault(msg, 4, 0),
        playersInfoList: jspb.Message.toObjectList(
          msg.getPlayersInfoList(),
          proto.towns.PlayerInfo.toObject,
          includeInstance
        ),
        duration: jspb.Message.getFieldWithDefault(msg, 6, 0),
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
 * @return {!proto.towns.GetGameInfoResponse}
 */
proto.towns.GetGameInfoResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.towns.GetGameInfoResponse();
  return proto.towns.GetGameInfoResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.towns.GetGameInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.towns.GetGameInfoResponse}
 */
proto.towns.GetGameInfoResponse.deserializeBinaryFromReader = function (
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
        var value = /** @type {!proto.towns.GameStage} */ (reader.readEnum());
        msg.setGameStage(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setCurrentCity(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setRequiredLetter(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setRound(value);
        break;
      case 5:
        var value = new proto.towns.PlayerInfo();
        reader.readMessage(
          value,
          proto.towns.PlayerInfo.deserializeBinaryFromReader
        );
        msg.addPlayersInfo(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setDuration(value);
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
proto.towns.GetGameInfoResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.towns.GetGameInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.towns.GetGameInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.towns.GetGameInfoResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = /** @type {!proto.towns.GameStage} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(1, f);
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
  f = message.getPlayersInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.towns.PlayerInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(6, f);
  }
};

/**
 * optional GameStage game_stage = 1;
 * @return {!proto.towns.GameStage}
 */
proto.towns.GetGameInfoResponse.prototype.getGameStage = function () {
  return /** @type {!proto.towns.GameStage} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/** @param {!proto.towns.GameStage} value */
proto.towns.GetGameInfoResponse.prototype.setGameStage = function (value) {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetGameInfoResponse.oneofGroups_[0],
    value
  );
};

proto.towns.GetGameInfoResponse.prototype.clearGameStage = function () {
  jspb.Message.setOneofField(
    this,
    1,
    proto.towns.GetGameInfoResponse.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetGameInfoResponse.prototype.hasGameStage = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string current_city = 2;
 * @return {string}
 */
proto.towns.GetGameInfoResponse.prototype.getCurrentCity = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/** @param {string} value */
proto.towns.GetGameInfoResponse.prototype.setCurrentCity = function (value) {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.GetGameInfoResponse.oneofGroups_[1],
    value
  );
};

proto.towns.GetGameInfoResponse.prototype.clearCurrentCity = function () {
  jspb.Message.setOneofField(
    this,
    2,
    proto.towns.GetGameInfoResponse.oneofGroups_[1],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetGameInfoResponse.prototype.hasCurrentCity = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string required_letter = 3;
 * @return {string}
 */
proto.towns.GetGameInfoResponse.prototype.getRequiredLetter = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/** @param {string} value */
proto.towns.GetGameInfoResponse.prototype.setRequiredLetter = function (value) {
  jspb.Message.setOneofField(
    this,
    3,
    proto.towns.GetGameInfoResponse.oneofGroups_[2],
    value
  );
};

proto.towns.GetGameInfoResponse.prototype.clearRequiredLetter = function () {
  jspb.Message.setOneofField(
    this,
    3,
    proto.towns.GetGameInfoResponse.oneofGroups_[2],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetGameInfoResponse.prototype.hasRequiredLetter = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional int32 round = 4;
 * @return {number}
 */
proto.towns.GetGameInfoResponse.prototype.getRound = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/** @param {number} value */
proto.towns.GetGameInfoResponse.prototype.setRound = function (value) {
  jspb.Message.setOneofField(
    this,
    4,
    proto.towns.GetGameInfoResponse.oneofGroups_[3],
    value
  );
};

proto.towns.GetGameInfoResponse.prototype.clearRound = function () {
  jspb.Message.setOneofField(
    this,
    4,
    proto.towns.GetGameInfoResponse.oneofGroups_[3],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetGameInfoResponse.prototype.hasRound = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * repeated PlayerInfo players_info = 5;
 * @return {!Array<!proto.towns.PlayerInfo>}
 */
proto.towns.GetGameInfoResponse.prototype.getPlayersInfoList = function () {
  return /** @type{!Array<!proto.towns.PlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.towns.PlayerInfo, 5)
  );
};

/** @param {!Array<!proto.towns.PlayerInfo>} value */
proto.towns.GetGameInfoResponse.prototype.setPlayersInfoList = function (
  value
) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};

/**
 * @param {!proto.towns.PlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.towns.PlayerInfo}
 */
proto.towns.GetGameInfoResponse.prototype.addPlayersInfo = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    5,
    opt_value,
    proto.towns.PlayerInfo,
    opt_index
  );
};

proto.towns.GetGameInfoResponse.prototype.clearPlayersInfoList = function () {
  this.setPlayersInfoList([]);
};

/**
 * optional int32 duration = 6;
 * @return {number}
 */
proto.towns.GetGameInfoResponse.prototype.getDuration = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/** @param {number} value */
proto.towns.GetGameInfoResponse.prototype.setDuration = function (value) {
  jspb.Message.setOneofField(
    this,
    6,
    proto.towns.GetGameInfoResponse.oneofGroups_[4],
    value
  );
};

proto.towns.GetGameInfoResponse.prototype.clearDuration = function () {
  jspb.Message.setOneofField(
    this,
    6,
    proto.towns.GetGameInfoResponse.oneofGroups_[4],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.towns.GetGameInfoResponse.prototype.hasDuration = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * @enum {number}
 */
proto.towns.GameStage = {
  NOT_STARTED: 0,
  IN_PROGRESS: 1,
  ENDED: 2,
};

goog.object.extend(exports, proto.towns);
