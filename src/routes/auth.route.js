/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register as user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullname
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               fullname: Le Thu Phuong
 *               email: phuonglethu@me.com
 *               password: Phuonglethu@2003
 *     responses:
 *       "201":
 *         description: Đăng ký thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Đăng ký thành công
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      type: object
 *                      properties:
 *                        _id:
 *                          type: string
 *                          example: 5ebac534954b54139806c112
 *                        email:
 *                          example: phuonglethu@me.com
 *                          type: string
 *                        fullname:
 *                          type: string
 *                          example: Le Thu Phuong
 *                        dateOfBirth:
 *                          example: 2000-01-01T00:00:00.000Z
 *                          type: string
 *                        gender:
 *                          type: string
 *                          example: male
 *                        avatar:
 *                          example: https://hitly.vn/avatar-default
 *                          type: string
 *                        role:
 *                          type: string
 *                          example: user
 *                        lastActive:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        createdAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        updatedAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                     accessToken:
 *                      type: string
 *                      example: eyJhbGciOiJIUzMTgsImV4cCI6MTcxMjA2OTMxOH0.3ubMUXRqtQ3AUjap_lK62h4
 *                     refreshToken:
 *                      type: string
 *                      example: eyJhbGciOiJIJ9.eyJpZCI6IjY2MGMwMzU2YLCJleHA2NjMzMTh9.KmmUiHEE
 *       "400":
 *         description: Email đã tồn tại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Email đã tồn tại
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: lethuphuong@me.com
 *               password: Phuonglethu@2003
 *     responses:
 *       "200":
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Đăng nhập thành công
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      type: object
 *                      properties:
 *                        _id:
 *                          type: string
 *                          example: 5ebac534954b54139806c112
 *                        email:
 *                          example: phuonglethu@me.com
 *                          type: string
 *                        fullname:
 *                          type: string
 *                          example: Le Thu Phuong
 *                        dateOfBirth:
 *                          example: 2000-01-01T00:00:00.000Z
 *                          type: string
 *                        gender:
 *                          type: string
 *                          example: male
 *                        avatar:
 *                          example: https://hitly.vn/avatar-default
 *                          type: string
 *                        role:
 *                          type: string
 *                          example: user
 *                        lastActive:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        createdAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        updatedAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                     accessToken:
 *                      type: string
 *                      example: eyJhbGciOiJIUzMTgsImV4cCI6MTcxMjA2OTMxOH0.3ubMUXRqtQ3AUjap_lK62h4
 *                     refreshToken:
 *                      type: string
 *                      example: eyJhbGciOiJIJ9.eyJpZCI6IjY2MGMwMzU2YLCJleHA2NjMzMTh9.KmmUiHEE
 *       "401":
 *         description: Tài khoản hoặc mật khẩu không chính xác
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Tài khoản hoặc mật khẩu không chính xác
 */

/**
 * @swagger
 * /auth/refresh-tokens:
 *   post:
 *     summary: Refresh auth tokens
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *             example:
 *               refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWk1NGI1NDE0ODQs6MTU4OTMwMDI4NH0.m1U63yC2FTMnCziif9X8yzwDEfJXAg
 *     responses:
 *       "200":
 *         description: Refresh token thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Refresh token thành công
 *                 data:
 *                   type: object
 *                   properties:
 *                     accessToken:
 *                      type: string
 *                      example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWk1NGI1NDE0ODQs6MTU4OTMwMDI4NH0.m1U63yC2FTMnCziif9X8yzwDEfJXAg
 *       "400":
 *         description: Token không chính xác
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Token không chính xác
 *       "401":
 *         description: Token đã hết hạn vui lòng login lại
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: Token đã hết hạn vui lòng login lại
 */

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get my profile
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Thông tin cá nhân của bạn
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Thông tin cá nhân của bạn
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      type: object
 *                      properties:
 *                        _id:
 *                          type: string
 *                          example: 5ebac534954b54139806c112
 *                        email:
 *                          example: phuonglethu@me.com
 *                          type: string
 *                        fullname:
 *                          type: string
 *                          example: Le Thu Phuong
 *                        dateOfBirth:
 *                          example: 2000-01-01T00:00:00.000Z
 *                          type: string
 *                        gender:
 *                          type: string
 *                          example: male
 *                        avatar:
 *                          example: https://hitly.vn/avatar-default
 *                          type: string
 *                        role:
 *                          type: string
 *                          example: user
 *                        lastActive:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        createdAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        updatedAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *       "401":
 *         description: Bạn cần đăng nhập
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Bạn cần đăng nhập
 */
/**
 * @swagger
 * /auth/change-password:
 *   post:
 *     summary: Change password
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 format: password
 *               newPassword:
 *                 type: string
 *                 format: password
 *             example:
 *               oldPassword: HaUIFood2024@
 *               newPassword: HaUIFood2024@2003
 *     responses:
 *       "200":
 *         description: Đổi mật khẩu thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Đổi mật khẩu thành công
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                      type: object
 *                      properties:
 *                        _id:
 *                          type: string
 *                          example: 5ebac534954b54139806c112
 *                        email:
 *                          example: phuonglethu@me.com
 *                          type: string
 *                        fullname:
 *                          type: string
 *                          example: Le Thu Phuong
 *                        dateOfBirth:
 *                          example: 2000-01-01T00:00:00.000Z
 *                          type: string
 *                        gender:
 *                          type: string
 *                          example: male
 *                        avatar:
 *                          example: https://hitly.vn/avatar-default
 *                          type: string
 *                        role:
 *                          type: string
 *                          example: user
 *                        lastActive:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        createdAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *                        updatedAt:
 *                          type: string
 *                          example: 2024-04-02T13:15:51.633Z
 *       "401":
 *         description: Mật khẩu không chính xác
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Mật khẩu không chính xác
 *
 *       "400":
 *         description: Mật khẩu không chính xác
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               code: 401
 *               message: Bạn cần đăng nhập
 *
 */
