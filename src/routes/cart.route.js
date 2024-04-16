/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Cart management and retrieval
 */

/**
 * @swagger
 * /carts:
 *   post:
 *     summary: Create a cart
 *     description: Users can create cart.
 *     tags: [Carts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cartDetailId
 *               - userId
 *               - isOrder
 *               - totalMoney
 *             properties:
 *               cartDetailId:
 *                 type: objectId
 *               userId:
 *                 type: objectId
 *               isOrder:
 *                 type: boolean
 *               totalMoney:
 *                 type: number
 *             example:
 *               cartDetailId: 6602f79a65bdc867e599b25e
 *               userId: 65fd6f75b449440a709beaa7
 *               isOrder: false
 *               totalMoney: 20000
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Cart'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 * 
 */
