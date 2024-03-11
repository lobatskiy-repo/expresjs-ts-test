import { mockRequest, mockResponse } from "../../__mocks__";
import { getUsers } from "../../handlers/users";

describe("getUsers", () => {
  it("shold return an array of users", () => {
    getUsers(mockRequest, mockResponse);
    expect(mockResponse.send).toHaveBeenCalledWith([]);
  });
});
