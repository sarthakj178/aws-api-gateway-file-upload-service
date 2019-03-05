var response = {
  headers: {
    "Content-Type": "application/json",
    AllowHeaders: "Origin,X-Requested-With,Content-Type,content-type,Accept",
    "Access-Control-Allow-Origin": "*"
  }
};

exports.ping = function(event, context, callback) {
  response.statusCode = 200;
  response.body = JSON.stringify({ success: true });
  callback(null, response);
};

exports.upload = function(event, context, callback) {
  console.log("Uploading", event.body);
  // Do whatever you want with the base64 encoded file - resize, compress, upload elsewhere
  response.statusCode = 200;
  response.body = JSON.stringify({
    length: event.body.length,
    prefix200: event.body.substr(0, 200)
  });
  callback(null, response);
};
