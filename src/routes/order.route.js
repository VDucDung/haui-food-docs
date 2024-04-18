/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management and retrieval
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a order
 *     description: Users can create order.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - cartId
 *               - address
 *               - note
 *               - status
 *             properties:
 *               userId:
 *                 type: string
 *                 format: objectId
 *               cartId:
 *                 type: string
 *                 format: objectId
 *               address:
 *                 type: string
 *               note:
 *                 type: string
 *               status:
 *                 type: string
 *             example:
 *               userId: 6603ea7966785a9c4d3c9d0b
 *               cartId: 6603d90f7c2708f66ed2ee4c
 *               address: Bac Tu Lien, Ha Noi
 *               note: giao sau 2h
 *               status: pending
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
