"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUserAndAddress = exports.insertUser = void 0;
exports.insertUser = `
INSERT INTO users(username,email,password) VALUES('username1','email1','password1');
`;
exports.insertUserAndAddress = `
BEGIN;
INSERT INTO users(username,email,password) VALUES('username2','email2','password2');
INSERT INTO address(user_id,city,country,street,pincode) VALUES(2,'delhi','india','delhi','110044);
COMMIT;
`;
