export const URL_API_LOGIN = 'https://thaoquan.herokuapp.com/api/user/login';
export const URL_API_GET_USERS = 'https://thaoquan.herokuapp.com/api/user';
export const URL_API_DEL_USERS = 'https://thaoquan.herokuapp.com/api/user/delete';
export const URL_AVATAR = 'https://a.wattpad.com/useravatar/meoruby.256.441318.jpg';

/**
 * Swagger https://thaoquan.herokuapp.com/api-docs/
 *
 * Register
 * /user/register
 *
 * Method: POST
 * Json data:
 * {
 * "username": "string",
 * "password": "string"
 * }
 */


/**
 * Login
 * /user/login
 *
 * Method: POST
 * Json data:
 * {
 * "username": "string",
 * "password": "string"
 * }
 */


/**
 * Change password
 * /user/changePassword
 *
 * Method: PUT
 * Json data:
 * {
 * "userId": "string",
 * "oldPassword": "string"
 * "newPassword": "string"
 * }
 */


/**
 * Delete user by id
 * /user/delete/{userId}
 *
 * Method: DELETE
 */


/**
 * Get user by ID
 * /user/{userId}
 *
 * Method: GET
 */
const response1 =
{
    "success": true,
    "data": {
        "user": {
            "_id": "632bed62caaa03efdf31b970",
            "username": "tuan123",
            "role": "USER",
            "status": "ACTIVE",
            "createDate": "2022-09-22T05:05:55.101Z",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
        }
    }
};

/**
 * Get all users
 * /user
 *
 * Method: GET
 */
const response = {
    "success": true,
    "data": {
        "userList": [
            {
                "_id": "632bed62caaa03efdf31b970",
                "username": "tuan123",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-22T05:05:55.101Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "63297bfc74352d10092fa002",
                "username": "hello111",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-20T08:27:12.812Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "63297c9474352d10092fa006",
                "username": "hello@gmail.com",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-20T08:27:12.812Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsdcBq5Fu6ud6EnSExOz8W4VNfy5TOS2y5Q&usqp=CAU"
            },
            {
                "_id": "63242cdff4ed5b4b6a38fc8a",
                "username": "hello123",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-16T07:58:02.660Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0ZtOm3chXYUz9QdETHSfox37dNfTiCHLIA&usqp=CAU"
            },
            {
                "_id": "63242d41f4ed5b4b6a38fc8e",
                "username": "haha123",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-16T07:58:02.660Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY9xVvpbWRMkNzUiipNgal4gJXyu1ClKIRg&usqp=CAU"
            },
            {
                "_id": "631302d778624a84777a5670",
                "username": "admin123",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-03T07:25:54.045Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttEogVhZFJGKczCOB58tWVxPLXoRSXDYCnw&usqp=CAU"
            },
            {
                "_id": "6313413578624a84777a5779",
                "username": "string",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-03T07:25:54.045Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY9xVvpbWRMkNzUiipNgal4gJXyu1ClKIRg&usqp=CAU"
            },
            {
                "_id": "6313415a78624a84777a577d",
                "username": "abc123",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-03T07:25:54.045Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-jpZLyVWcLRfQkYJWWyATzbPsKGdOY76YA&usqp=CAU"
            },
            {
                "_id": "6313465778624a84777a57ab",
                "username": "abc121233",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-09-03T07:25:54.045Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij7pqO4dXH8FIToYffPFVxKbKChTyBdKS2g&usqp=CAU"
            },
            {
                "_id": "630e28f816f8fd46aab85b29",
                "username": "KhanhZua",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-08-30T15:11:50.438Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1abVAESgnK-MIQJHeUWieamJhfYUPmjQBQg&usqp=CAU"
            },
            {
                "_id": "630e2d2916f8fd46aab85b6d",
                "username": "KhanhZuaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-08-30T15:11:50.438Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEjmfH91SvMBbFEpUBHGdc_mv5zkDuJFidg&usqp=CAU"
            },
            {
                "_id": "630ddc2d3465dc0c91320c46",
                "username": "KhanhVu",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-08-30T09:26:58.263Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-jpZLyVWcLRfQkYJWWyATzbPsKGdOY76YA&usqp=CAU"
            },
            {
                "_id": "62ef840ccd8fce0c587711d8",
                "username": "hhson2000",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-08-07T09:21:13.196Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttEogVhZFJGKczCOB58tWVxPLXoRSXDYCnw&usqp=CAU"
            },
            {
                "_id": "62c70113315a5a8387e808ce",
                "username": "strinadfg",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-x5Fhk5Kf0DZ3QWrKKWJo7yBCmrulPOxUg&usqp=CAU"
            },
            {
                "_id": "62c7011d315a5a8387e808d1",
                "username": "strianadfg",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-x5Fhk5Kf0DZ3QWrKKWJo7yBCmrulPOxUg&usqp=CAU"
            },
            {
                "_id": "62c70123315a5a8387e808d4",
                "username": "striaanadfg",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WxWNSjhWl6XKVQa39ltQuYbTdNh-_fYdPQ&usqp=CAU"
            },
            {
                "_id": "62c70129315a5a8387e808d7",
                "username": "striaaanadfg",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-x5Fhk5Kf0DZ3QWrKKWJo7yBCmrulPOxUg&usqp=CAU"
            },
            {
                "_id": "62c7012f315a5a8387e808da",
                "username": "striaaanaadfg",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-jpZLyVWcLRfQkYJWWyATzbPsKGdOY76YA&usqp=CAU"
            },
            {
                "_id": "62c70133315a5a8387e808dd",
                "username": "striaaanaadfga",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-jpZLyVWcLRfQkYJWWyATzbPsKGdOY76YA&usqp=CAU"
            },
            {
                "_id": "62c70137315a5a8387e808e0",
                "username": "striaaanaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttEogVhZFJGKczCOB58tWVxPLXoRSXDYCnw&usqp=CAU"
            },
            {
                "_id": "62c7013e315a5a8387e808e3",
                "username": "snaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "62c70142315a5a8387e808e6",
                "username": "snaaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-x5Fhk5Kf0DZ3QWrKKWJo7yBCmrulPOxUg&usqp=CAU"
            },
            {
                "_id": "62c70146315a5a8387e808e9",
                "username": "asnaaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0ZtOm3chXYUz9QdETHSfox37dNfTiCHLIA&usqp=CAU"
            },
            {
                "_id": "62c7014b315a5a8387e808ec",
                "username": "aasnaaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "62c7014d315a5a8387e808ef",
                "username": "aaasnaaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "62c70150315a5a8387e808f2",
                "username": "aaassnaaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-x5Fhk5Kf0DZ3QWrKKWJo7yBCmrulPOxUg&usqp=CAU"
            },
            {
                "_id": "62c70152315a5a8387e808f5",
                "username": "aaassfnaaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk4DVs86CnShBDGbHpgZFYCNdjHr3rmEb6g&usqp=CAU"
            },
            {
                "_id": "62c70155315a5a8387e808f8",
                "username": "aaassfnagaadfgaa",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-07-07T15:33:05.295Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij7pqO4dXH8FIToYffPFVxKbKChTyBdKS2g&usqp=CAU"
            },
            {
                "_id": "62b25b5647bb648f729ade57",
                "username": "Cheoling(ADMIN)",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T23:57:58.559Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "62b1dc4078b8ce0a91ca8d52",
                "username": "striaaffang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "62b1dc4878b8ce0a91ca8d56",
                "username": "striafaaffang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WxWNSjhWl6XKVQa39ltQuYbTdNh-_fYdPQ&usqp=CAU"
            },
            {
                "_id": "62b1dc4d78b8ce0a91ca8d59",
                "username": "striaffaaaffang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "62b1dc7c78b8ce0a91ca8d5d",
                "username": "striaafafaaaffang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BWkTNf9kuYRHHlZgleOnehwzpfv3ov0zyw&usqp=CAU"
            },
            {
                "_id": "62b1dc8078b8ce0a91ca8d60",
                "username": "striaaafafaaaffang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY9xVvpbWRMkNzUiipNgal4gJXyu1ClKIRg&usqp=CAU"
            },
            {
                "_id": "62b1dc8278b8ce0a91ca8d63",
                "username": "striaaaafafaaaffang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WxWNSjhWl6XKVQa39ltQuYbTdNh-_fYdPQ&usqp=CAU"
            },
            {
                "_id": "62b1dd7278b8ce0a91ca8d6a",
                "username": "striaaaafafaaaaffang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2vPNTzFXDPwWmyqDBum89BkboDJmi7ID3g&usqp=CAU"
            },
            {
                "_id": "62b1ddad78b8ce0a91ca8d75",
                "username": "striaang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BWkTNf9kuYRHHlZgleOnehwzpfv3ov0zyw&usqp=CAU"
            },
            {
                "_id": "62b1dde578b8ce0a91ca8d7a",
                "username": "striaaang",
                "role": "USER",
                "status": "ACTIVE",
                "createDate": "2022-06-21T13:07:09.566Z",
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsdcBq5Fu6ud6EnSExOz8W4VNfy5TOS2y5Q&usqp=CAU"
            }
        ]
    }
};