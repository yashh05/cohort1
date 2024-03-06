export const insertUser = `
INSERT INTO users(username,email,password) VALUES('username1','email1','password1');
`;

export const insertUserAndAddress = `
BEGIN;
INSERT INTO users(username,email,password) VALUES('username2','email2','password2');
INSERT INTO address(user_id,city,country,street,pincode) VALUES(2,'delhi','india','delhi','110044);
COMMIT;
`;
