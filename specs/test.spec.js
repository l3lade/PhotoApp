var request = require("request");
var base_url = "http://localhost:3000/api/users";

describe("Users api testing", function() {

  it("returns status code 200", function(done) {
    request.get(base_url, function(error, response, body) {
      expect(response.statusCode).toBe(200);
      console.log(response.body);
      done();
    });
  });

});
